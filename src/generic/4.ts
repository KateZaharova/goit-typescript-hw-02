/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:

  class Component {
  constructor (public props:T) {

  }
}

class Page extends Component {
  pageInfo () {
    console.log(this.props.title);
  }
}
*/

interface Template<T>{
  props: T;
}

class Component<T> implements Template<T> {
  constructor (public props:T) {

  }
}

class Page<T extends {title:string}> extends Component<T> {
  pageInfo () {
    console.log(this.props.title);
  }
}
export {};
