const flareFS = "uniform vec3 color;\nuniform sampler2D texture;\n\nvarying float opacity;\n\n// Normalizes a value between 0 - 1\nfloat normFloat(float n, float minVal, float maxVal){\n    return max(0.0, min(1.0, (n-minVal) / (maxVal-minVal)));\n}\n\nvoid main() {\n\t// Additive\n    gl_FragColor = texture2D( texture, gl_PointCoord);\n    gl_FragColor.a = normFloat(opacity, 0.01, 0.1);\n}"
export {flareFS}