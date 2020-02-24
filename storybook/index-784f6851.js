import{c as e,L as t}from"./lit-element-089a5717.js";import{q as s}from"./storybook-preview-9aba481c.js";var n=e`:host{box-sizing:border-box;margin:var(--spectrum-popover-padding-y,var(--spectrum-global-dimension-size-50)) 0;padding:0;list-style-type:none;overflow:auto;display:block;background-color:var(--spectrum-selectlist-background-color,var(--spectrum-alias-background-color-transparent));display:inline-block}:host sp-menu{display:block}`;customElements.define("sp-menu",class extends t{constructor(){super(),this.menuItems=[],this.focusedItemIndex=0,this.focusInItemIndex=0,this.handleKeydown=this.handleKeydown.bind(this),this.startListeningToKeyboard=this.startListeningToKeyboard.bind(this),this.stopListeningToKeyboard=this.stopListeningToKeyboard.bind(this),this.onClick=this.onClick.bind(this),this.addEventListener("click",this.onClick),this.addEventListener("focusin",this.startListeningToKeyboard),this.addEventListener("focusout",this.stopListeningToKeyboard)}static get styles(){return[n]}get childRole(){return"menu"===this.getAttribute("role")?"menuitem":"option"}focus(){if(0!==this.menuItems.length){var e=this.menuItems[this.focusInItemIndex];this.focusedItemIndex=this.focusInItemIndex,e.focus()}}onClick(e){e.composedPath().find(e=>e instanceof Element&&e.getAttribute("role")===this.childRole)&&this.prepareToCleanUp()}startListeningToKeyboard(){0!==this.menuItems.length&&this.addEventListener("keydown",this.handleKeydown)}stopListeningToKeyboard(){this.removeEventListener("keydown",this.handleKeydown)}handleKeydown(e){var{code:t}=e;if("Tab"!==t){if("ArrowDown"===t||"ArrowUp"===t){e.preventDefault();var s="ArrowDown"===t?1:-1;this.focusMenuItemByOffset(s)}}else this.prepareToCleanUp()}focusMenuItemByOffset(e){var t=this.menuItems[this.focusedItemIndex];this.focusedItemIndex=(this.menuItems.length+this.focusedItemIndex+e)%this.menuItems.length;for(var s=this.menuItems[this.focusedItemIndex];s.disabled;)this.focusedItemIndex=(this.menuItems.length+this.focusedItemIndex+e)%this.menuItems.length,s=this.menuItems[this.focusedItemIndex];s.focus(),t.tabIndex=-1}prepareToCleanUp(){document.addEventListener("focusout",()=>{requestAnimationFrame(()=>{this.querySelector("[selected]")&&(this.menuItems[this.focusInItemIndex].tabIndex=-1);this.updateSelectedItemIndex(),this.menuItems[this.focusInItemIndex].tabIndex=0})},{once:!0})}updateSelectedItemIndex(){for(var e=this.menuItems.length-1,t=this.menuItems[e];e&&t&&!t.selected;)e-=1,t=this.menuItems[e];this.focusedItemIndex=e,this.focusInItemIndex=e}handleSlotchange(){(this.menuItems=[...this.querySelectorAll(`[role="${this.childRole}"]`)],this.menuItems&&0!==this.menuItems.length)&&(this.updateSelectedItemIndex(),this.menuItems[this.focusInItemIndex].tabIndex=0)}render(){return s` <slot @slotchange="${this.handleSlotchange}"></slot> `}connectedCallback(){if(super.connectedCallback(),!this.hasAttribute("role")){var e=new CustomEvent("sp-menu-query-role",{bubbles:!0,composed:!0,detail:{role:""}});this.dispatchEvent(e),this.setAttribute("role",e.detail.role||"menu")}}});
//# sourceMappingURL=index-784f6851.js.map