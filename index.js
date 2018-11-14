function getFirstSelector(selector) {
    return document.querySelector(selector)
}

function nestedTarget() {
    return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n) {
    const rankedLists = document.querySelectorAll('ul.ranked-list li')
    for (let i = 0; i < rankedLists.length; i++) {
        rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML) + n
    }
}

function deepestChild() {
    let node = document.getElementById('grand-node')
    let finalNode = node.children[4]
    return finalNode
}

function deepestChild() {
    let node = document.getElementById('grand-node')
    let nextNode = node.children[0]
  
    while (nextNode) {
      node = nextNode
      nextNode = node.children[0]
    }
  
    return node
  }

// function increaseRankBy(n) {
//     const rankedLists = document.querySelectorAll('.ranked-list')
  
//     for (let i = 0, l = rankedLists.length; i < l; i++) {
//       let children = rankedLists[i].children
  
//       for (let j = 0, k = children.length; j < k; j++) {
//         children[j].innerHTML = parseInt(children[j].innerHTML) + n
//       }
//     }
//   }