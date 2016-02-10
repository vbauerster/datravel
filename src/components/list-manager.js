import {inject, bindable} from 'aurelia-framework';
import {BindingSignaler} from 'aurelia-templating-resources';

@inject(Element, BindingSignaler)
export class ListManager {
  @bindable model = [];
  @bindable destList = {};
  @bindable feedbackTimeout = 100;

  constructor(element, bindingSignaler) {
    this.element = element;
    this.redrawList = bindingSignaler.signal.bind(bindingSignaler, 're-list');
    this.redrawBtn = bindingSignaler.signal.bind(bindingSignaler, 're-btn');
  }

  isButtonDisabled(list) {
    return list.id === this.destList.id ? 'pure-button-disabled' : '';
  }

  destListChanged() {
    this.redrawBtn();
  }

  move(item, index, list) {
    // warn if no list selected
    if (!this.destList.id) {
      alert('Select destination list first, please!');
      return;
    }
    // return on stupid actions
    if (this.destList.id === list.id) {
      return;
    }
    var srcItems = list.items;
    var destItems = this.destList.items;
    var copyTo = this.destList.redundantCopyTo;
    srcItems.splice(index, 1);
    destItems.push(item);
    if (Array.isArray(copyTo)) {
      for (let i = copyTo.length; i--;) {
        let refId = copyTo[i];
        let copyToList = this.model.find(list => list.id === refId);
        copyToList.items.push(item);
      }
    }
    this.showFeedback = true;
    this.redrawList();
    setTimeout(() => {
      this.showFeedback = false;
      this.redrawList();
    }, this.feedbackTimeout);
  }

  listStyle(list) {
    if (this.destList.id !== list.id) {
      return;
    }
    if (this.showFeedback && list.feedback) {
      var classes = Object.keys(list.feedback).map(key => list.feedback[key] ? key : '');
      return classes.join(' ');
    }
  }

}
