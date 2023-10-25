/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.

  interface KeyValuePair {
  key;
  value;
}
*/

interface KeyValuePair<TKey, TValue> {
  key: TKey;
  value: TValue;
}

class AllKeys<TKey, TValue> implements KeyValuePair<TKey, TValue> {
  constructor(public key: TKey, public value: TValue){};

  getKey(): TKey {
    return this.key;
  }

  getValue(): TValue {
    return this.value;
  }
}

export {};