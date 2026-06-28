const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

function shouldSkip(name) {
    return name === 'charlie';
}

for (let i = 0; i < names.length; i++) {
    if (shouldSkip(names[i].toLowerCase())) {
        continue;
    }
    console.log(names[i]);
}