uniform sampler2D uDayTexture;
uniform sampler2D uNightTexture;
uniform sampler2D uSpecularCloudsTexture;
uniform vec3 uSunDirection;
uniform vec3 uAtmosphereDayColor;
uniform vec3 uAtmosphereTwilightColor;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
  vec3 viewDirection = normalize(vPosition - cameraPosition);
  vec3 normal = normalize(vNormal);
  vec3 color = vec3(0.0);

  vec3 dayColor = texture(uDayTexture, vUv).rgb * 2.0;
  vec3 nightColor = texture(uNightTexture, vUv).rgb;
  vec2 specularCloudsColor = texture(uSpecularCloudsTexture, vUv).rg;

  float sunOrigntation = dot(uSunDirection, normal);

  float dayMix = smoothstep(-0.25, 0.5, sunOrigntation);
  color += mix(nightColor, dayColor, dayMix);

  float cloudMix = smoothstep(0.5, 1.0, specularCloudsColor.g * 1.1);
  cloudMix *= dayMix;
  color = mix(color, vec3(1.0), cloudMix);

  float fresnel = dot(viewDirection, normal) + 1.1;
  fresnel = pow(fresnel, 2.0);

  float atmosphereDayMix = smoothstep(-0.5, 1.0, sunOrigntation);
  vec3 atmosphereColors = mix(uAtmosphereDayColor, uAtmosphereTwilightColor, atmosphereDayMix);
  color = mix(color, atmosphereColors, fresnel * atmosphereDayMix);

  vec3 reflection = reflect(-uSunDirection, normal);
  float specular = -dot(reflection, viewDirection);
  specular = max(specular, 0.0);
  specular = pow(specular, 10.0);
  specular *= specularCloudsColor.r * .7;

  vec3 specularColor = mix(vec3(1.0), atmosphereColors, fresnel);
  color += specular * specularColor;

  gl_FragColor = vec4(color, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
