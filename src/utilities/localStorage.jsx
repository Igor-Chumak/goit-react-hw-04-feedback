export function loadFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function saveToLocalStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}
