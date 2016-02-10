import {inject, bindable} from 'aurelia-framework';
import {BindingSignaler} from 'aurelia-templating-resources';

@inject(Element, BindingSignaler)
export class ListManager {
  @bindable model = [];
  @bindable selectedList = {};

  constructor(element, bindingSignaler) {
    this.element = element;
    this.bindingSignaler = bindingSignaler;
  }

  isButtonDisabled(list) {
    return list.id === this.selectedList.id ? 'pure-button-disabled' : '';
  }

  selectedListChanged() {
    console.log('listChanged');
    this.bindingSignaler.signal('btn-repaint');
  }

  move(item, index, list) {
    if (this.selectedList.id === list.id) {
      return;
    }
    console.log(item, index, list);
    list.items.splice(index, 1);
    this.selectedList.items.push(item);
  }

}
