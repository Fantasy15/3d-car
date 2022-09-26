const tailLightVS = "#define NIGHTLIGHT 0.4\n\nfloat normFloat(float n, float minVal, float maxVal){\n\treturn max(0.0, min(1.0, (n-minVal) / (maxVal-minVal)));\n}\n\n// Returns 1 if type matches val, 0 if not\nfloat checkType(float type, float val){\n\treturn step(val - 0.1, type) * step(type, val + 0.1);\n}\n\nuniform vec3 lightsT;\nuniform vec3 lightsO;\nattribute float type;\nvarying float red;\nvarying float amb;\nvarying float wht;\nvarying float brightness;\n\nvoid main(){\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0 );\n\tbrightness = 1.0;\n\n\t// Type 0: Reverse light?\n\n\t// Type 1: Right blinker\n\tamb = checkType(type, 1.0) * lightsT.z;\n\n\t// Type 2: Left blinker\n\tamb += checkType(type, 2.0) * lightsT.y;\n\n\t// Type 3: Side brakelights & side nightlights\n\tred = checkType(type, 3.0) * (NIGHTLIGHT + lightsO.x * (1.0 - NIGHTLIGHT));\n\n\t// Type 4: Center brakelight\n\tred += checkType(type, 4.0) * lightsO.x;\n\n\t// Type 5: Center nightlight\n\tred += checkType(type, 5.0) * NIGHTLIGHT;\n\n\t// Type 6: Lower foglights off\n\tred += checkType(type, 6.0) * NIGHTLIGHT * 0.2;\n\n\t// Type 7: Lower foglights on\n\tred += checkType(type, 7.0) * NIGHTLIGHT * 1.5;\n}"
export {tailLightVS}