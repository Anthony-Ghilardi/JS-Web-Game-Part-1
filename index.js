function newImage (greenCharacter, pineTree) {
greenCharacter, pineTree = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
pineTree.src = 'assets/pine-tree.png'
greenCharacter.style.position = 'fixed'
pineTree.style.position = 'fixed'
greenCharacter.style.left = '100px'
pineTree.style.left = '450px'
greenCharacter.style.bottom = '100px'
pineTree.style.bottom = '200px'
document.body.append(greenCharacter)
document.body.append(pineTree)
}

newImage();