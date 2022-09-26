const headgridFS = "#define RED vec3(1.0, 0.1, 0.1) // red\n#define AMB vec3(1.0, 0.6, 0.1)\t// amber\n#define WHT vec3(1.0, 1.0, 1.0)\t// white\n\nvarying float wht;\nvarying float amb;\n\nvoid main() {\n\tgl_FragColor = vec4((WHT * wht + AMB * amb), 1.0);\n}"
export {headgridFS}
