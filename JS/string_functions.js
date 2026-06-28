let str = "Hello World"
console.log(str.length)

console.log(str.charAt(4))
console.log(str.charCodeAt(4))

console.log(str.toUpperCase())
console.log(str.toLowerCase())

console.log(str.indexOf("World"))
console.log(str.indexOf("World", 6))
console.log(str.indexOf("World", 11))

console.log(str.slice(0, 5))
console.log(str.slice(6))

console.log(str.replace("World", "JavaScript"))

console.log(str.includes("World"))
console.log(str.includes("World", 6))
console.log(str.includes("World", 11))

console.log(str.startsWith("Hello"))
console.log(str.startsWith("World"))
console.log(str.startsWith("World", 6))
console.log(str.startsWith("World", 11))

console.log(str.endsWith("World"))
console.log(str.endsWith("World", 6))
console.log(str.endsWith("World", 11))

console.log(str.split(" "))
console.log(str.split(" ", 1))

console.log(str.trim())
