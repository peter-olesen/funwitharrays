const shoppingList = ['Milk', 'Eggs', 'Cheese', 'Ham', 'Toilet paper'];

// .pop() removes the last element (item) from the array (shopping list)
console.groupCollapsed('Shopping list .pop()');
console.log('Shopping list items:', shoppingList);
console.log('Popped/removed item:', shoppingList.pop());
console.log('Popped/removed item:', shoppingList.pop());
console.groupEnd();

// .push() pushes an element (item) into the array (shopping list)
console.groupCollapsed('Shopping list .push()');
console.log('Shopping list items:', shoppingList);
shoppingList.push('Toothbrush');
console.log('Added toothbrush to list, total items:', shoppingList.length);
console.log(shoppingList);
console.groupEnd();

// .shift() removes the first element (item) from the array (shopping list)
console.groupCollapsed('Shopping list .shift()');
console.log('Shopping list items:', shoppingList);
console.log('Shifted/removed item:', shoppingList.shift());
console.log(shoppingList);
console.groupEnd();

// .unshift() adds an element to the front/top of the array (shopping list)
console.groupCollapsed('Shopping list .unshift()');
console.log(shoppingList);
console.log('Adding (.unshift) condoms to top of shopping list')
shoppingList.unshift('Condoms');
console.log(shoppingList);
console.groupEnd();

// .slice slices/removes elements from the array (shopping list)
console.groupCollapsed('Shopping list .slice()');
console.log('Removing/slicing first two items from shopping list');
console.log('Shopping list:', shoppingList.slice(2));
console.log('Adding items back to list')
console.log('Shopping list:', shoppingList.slice(-4));
console.groupEnd();

// forEach() console logs every element (item) in the array (shopping list)
console.groupCollapsed('Shopping list .forEach()');
console.log('Every item still on shopping list:')
shoppingList.forEach((element) => console.log(element));
console.groupEnd();
