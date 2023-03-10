#version 330
precision mediump float;

#define MAX_SIZE 512

uniform int size;
uniform vec2 seeds[MAX_SIZE];
uniform vec3 colors[MAX_SIZE];

// Manhattan distance
float distance_to(vec2 v1, vec2 v2) {
	return abs(v1.x - v2.x) + abs(v1.y - v2.y);
}

void main() {
    float dist = distance(seeds[0], gl_FragCoord.xy);
    vec3 color = colors[0];

    for (int i = 1; i < size; i++) {
        float current = distance(seeds[i], gl_FragCoord.xy);
        if (current < dist) {
            color = colors[i], dist = current;
        }
    }

    gl_FragColor = vec4(color, 1.0);
}
