# PACCU (Protección de Acceso a Usuarios)
Es una web que mediante el uso del cifrado César protege usuarios recién creados, de sistemas de facturación
de las principales empresas de telecomunicaciones.

## Índice

* [1. Problemática](#1-problemática)
* [2. Usuarios](#2-usuarios)
* [3. Solución](#3-solución)
* [4. Cifrado César](#4-cifrado-césar)
* [5. Primer prototipo](#5-primer-prototipo)
* [6. Feedback](#6-feedback)
* [7. Prototipo final](#7-prototipo-final)

***

## 1. Problemática

Las empresas grandes de telecomunicaciones sub contratan empresas mas pequeñas
para el manejo de información de sus numerosos clientes, por lo que diariamente
generan usuarios que acceden a su base de datos, para cada trabajador de las
empresas subcontratadas. Sin embargo, se ha detectado que las personas encargadas
de entregar los usuarios a los trabajadores, los utilizan antes, valiéndose de
que por default todos los usuarios nuevos tienen la misma contraseña y están
realizando acciones fraudulentas que perjudican, no solo a los clientes de las
empresas, sino también a los trabajadores que tenían designados esos usuarios,
ya que ahora enfrentarán procesos de investigación por malas prácticas que no
realizaron.

## 2. Usuarios

Personas de 20 a 35 años que trabajan en empresas de telecomunicaciones,
acostumbrados al uso de interfaces web prácticas y sencillas.

## 3. Solución

Se propone el uso del cifrado de usuarios nuevos para evitar el problema
expuesto. La empresa genera los usuarios utilizando la herramienta de cifrado,
posteriormente la persona encargada de entregar los usuarios recibe estos datos
cifrados y los proporciona al usuario final (el trabajador), quien sería el que
descifre la información.

## 4. Cifrado César

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.

## 5. Primer prototipo

Prototipo inicial en lapiz y papel:

![](https://raw.githubusercontent.com/claudiaret/LIM011-cipher/master/prototipo_papel.jpg)

## 6. Feedback

* Usar una imagen para el background y no un banner.
* Reducir el tamaño de los inputs
* Que la respuesta del cifrado aparezca en la misma página.

## 7. Prototipo final

Imagen del prototipo final:

![](https://raw.githubusercontent.com/claudiaret/LIM011-cipher/master/prototipo_1.jpg)

![](https://raw.githubusercontent.com/claudiaret/LIM011-cipher/master/prototipo_2.jpg)

![](https://raw.githubusercontent.com/claudiaret/LIM011-cipher/master/prototipo_3.jpg)
