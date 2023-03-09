import { c as create_ssr_component, a as compute_rest_props, s as setContext, g as getContext, o as onDestroy, b as spread, e as escape_object, d as escape_attribute_value, f as add_attribute, h as subscribe, i as escape, j as compute_slots, v as validate_component, k as each } from "../../chunks/index2.js";
import { createPopper } from "@popperjs/core";
import { w as writable } from "../../chunks/index.js";
const bootstrap_min = "";
function toClassName(value) {
  let result = "";
  if (typeof value === "string" || typeof value === "number") {
    result += value;
  } else if (typeof value === "object") {
    if (Array.isArray(value)) {
      result = value.map(toClassName).filter(Boolean).join(" ");
    } else {
      for (let key in value) {
        if (value[key]) {
          result && (result += " ");
          result += key;
        }
      }
    }
  }
  return result;
}
function classnames(...args) {
  return args.map(toClassName).filter(Boolean).join(" ");
}
function createPopperActions(initOptions) {
  let contentNode;
  let options = initOptions;
  let popperInstance = null;
  let referenceNode;
  const initPopper = () => {
    if (referenceNode && contentNode) {
      popperInstance = createPopper(referenceNode, contentNode, options);
    }
  };
  const deinitPopper = () => {
    if (popperInstance) {
      popperInstance.destroy();
      popperInstance = null;
    }
  };
  const referenceAction = (node) => {
    referenceNode = node;
    initPopper();
    return {
      destroy() {
        deinitPopper();
      }
    };
  };
  const contentAction = (node, contentOptions) => {
    contentNode = node;
    options = Object.assign(Object.assign({}, initOptions), contentOptions);
    initPopper();
    return {
      update(newContentOptions) {
        options = Object.assign(
          Object.assign({}, initOptions),
          newContentOptions
        );
        if (popperInstance && options) {
          popperInstance.setOptions(options);
        }
      },
      destroy() {
        deinitPopper();
      }
    };
  };
  return [referenceAction, contentAction, () => popperInstance];
}
const createContext = () => writable({});
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let subItemIsActive;
  let classes;
  let handleToggle;
  let $$restProps = compute_rest_props($$props, [
    "class",
    "active",
    "direction",
    "dropup",
    "group",
    "inNavbar",
    "isOpen",
    "nav",
    "setActiveFromChild",
    "size",
    "toggle"
  ]);
  const noop = () => void 0;
  let context = createContext();
  setContext("dropdownContext", context);
  const navbarContext = getContext("navbar");
  let { class: className = "" } = $$props;
  let { active = false } = $$props;
  let { direction = "down" } = $$props;
  let { dropup = false } = $$props;
  let { group = false } = $$props;
  let { inNavbar = navbarContext ? navbarContext.inNavbar : false } = $$props;
  let { isOpen = false } = $$props;
  let { nav = false } = $$props;
  let { setActiveFromChild = false } = $$props;
  let { size = "" } = $$props;
  let { toggle = void 0 } = $$props;
  const [popperRef, popperContent] = createPopperActions();
  const validDirections = ["up", "down", "left", "right", "start", "end"];
  if (validDirections.indexOf(direction) === -1) {
    throw new Error(`Invalid direction sent: '${direction}' is not one of 'up', 'down', 'left', 'right', 'start', 'end'`);
  }
  let component;
  let dropdownDirection;
  function handleDocumentClick(e) {
    if (e && (e.which === 3 || e.type === "keyup" && e.which !== 9))
      return;
    if (component.contains(e.target) && component !== e.target && (e.type !== "keyup" || e.which === 9)) {
      return;
    }
    handleToggle(e);
  }
  onDestroy(() => {
    if (typeof document !== "undefined") {
      ["click", "touchstart", "keyup"].forEach((event) => document.removeEventListener(event, handleDocumentClick, true));
    }
  });
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.dropup === void 0 && $$bindings.dropup && dropup !== void 0)
    $$bindings.dropup(dropup);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.inNavbar === void 0 && $$bindings.inNavbar && inNavbar !== void 0)
    $$bindings.inNavbar(inNavbar);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.nav === void 0 && $$bindings.nav && nav !== void 0)
    $$bindings.nav(nav);
  if ($$props.setActiveFromChild === void 0 && $$bindings.setActiveFromChild && setActiveFromChild !== void 0)
    $$bindings.setActiveFromChild(setActiveFromChild);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  subItemIsActive = !!(setActiveFromChild && component && typeof component.querySelector === "function" && component.querySelector(".active"));
  {
    {
      if (direction === "left")
        dropdownDirection = "start";
      else if (direction === "right")
        dropdownDirection = "end";
      else
        dropdownDirection = direction;
    }
  }
  handleToggle = toggle || (() => isOpen = !isOpen);
  classes = classnames(className, direction !== "down" && `drop${dropdownDirection}`, nav && active ? "active" : false, setActiveFromChild && subItemIsActive ? "active" : false, {
    "btn-group": group,
    [`btn-group-${size}`]: !!size,
    dropdown: !group,
    show: isOpen,
    "nav-item": nav
  });
  {
    {
      if (typeof document !== "undefined") {
        if (isOpen) {
          ["click", "touchstart", "keyup"].forEach((event) => document.addEventListener(event, handleDocumentClick, true));
        } else {
          ["click", "touchstart", "keyup"].forEach((event) => document.removeEventListener(event, handleDocumentClick, true));
        }
      }
    }
  }
  {
    {
      context.update(() => {
        return {
          toggle: handleToggle,
          isOpen,
          direction: direction === "down" && dropup ? "up" : direction,
          inNavbar: nav || inNavbar,
          popperRef: nav ? noop : popperRef,
          popperContent: nav ? noop : popperContent
        };
      });
    }
  }
  return `${nav ? `<li${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}${add_attribute("this", component, 0)}>${slots.default ? slots.default({}) : ``}</li>` : `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}${add_attribute("this", component, 0)}>${slots.default ? slots.default({}) : ``}</div>`}`;
});
const DropdownItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "active", "disabled", "divider", "header", "toggle", "href"]);
  let $$unsubscribe_context;
  const context = getContext("dropdownContext");
  $$unsubscribe_context = subscribe(context, (value) => value);
  let { class: className = "" } = $$props;
  let { active = false } = $$props;
  let { disabled = false } = $$props;
  let { divider = false } = $$props;
  let { header = false } = $$props;
  let { toggle = true } = $$props;
  let { href = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.divider === void 0 && $$bindings.divider && divider !== void 0)
    $$bindings.divider(divider);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  classes = classnames(className, {
    disabled,
    "dropdown-item": !divider && !header,
    active,
    "dropdown-header": header,
    "dropdown-divider": divider
  });
  $$unsubscribe_context();
  return `<li>${header ? `<h6${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</h6>` : `${divider ? `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</div>` : `${href ? `<a${spread(
    [
      escape_object($$restProps),
      { click: true },
      { href: escape_attribute_value(href) },
      { class: escape_attribute_value(classes) }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a>` : `<button${spread(
    [
      { type: "button" },
      escape_object($$restProps),
      { class: escape_attribute_value(classes) }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</button>`}`}`}</li>`;
});
const DropdownMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "dark", "end", "right"]);
  let $context, $$unsubscribe_context;
  const context = getContext("dropdownContext");
  $$unsubscribe_context = subscribe(context, (value) => $context = value);
  let { class: className = "" } = $$props;
  let { dark = false } = $$props;
  let { end = false } = $$props;
  let { right = false } = $$props;
  const popperPlacement = (direction, end2) => {
    let prefix = direction;
    if (direction === "up")
      prefix = "top";
    else if (direction === "down")
      prefix = "bottom";
    let suffix = end2 ? "end" : "start";
    return `${prefix}-${suffix}`;
  };
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.dark === void 0 && $$bindings.dark && dark !== void 0)
    $$bindings.dark(dark);
  if ($$props.end === void 0 && $$bindings.end && end !== void 0)
    $$bindings.end(end);
  if ($$props.right === void 0 && $$bindings.right && right !== void 0)
    $$bindings.right(right);
  ({
    modifiers: [
      { name: "flip" },
      {
        name: "offset",
        options: { offset: [0, 2] }
      }
    ],
    placement: popperPlacement($context.direction, end || right)
  });
  classes = classnames(className, "dropdown-menu", {
    "dropdown-menu-dark": dark,
    "dropdown-menu-end": end || right,
    show: $context.isOpen
  });
  $$unsubscribe_context();
  return `<ul${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(classes) },
      {
        "data-bs-popper": escape_attribute_value($context.inNavbar ? "static" : void 0)
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</ul>`;
});
const DropdownToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let btnClasses;
  let $$restProps = compute_rest_props($$props, [
    "class",
    "ariaLabel",
    "active",
    "block",
    "caret",
    "color",
    "disabled",
    "inner",
    "nav",
    "outline",
    "size",
    "split",
    "tag"
  ]);
  let $context, $$unsubscribe_context;
  const context = getContext("dropdownContext");
  $$unsubscribe_context = subscribe(context, (value) => $context = value);
  let { class: className = "" } = $$props;
  let { ariaLabel = "Toggle Dropdown" } = $$props;
  let { active = false } = $$props;
  let { block = false } = $$props;
  let { caret = false } = $$props;
  let { color = "secondary" } = $$props;
  let { disabled = false } = $$props;
  let { inner = void 0 } = $$props;
  let { nav = false } = $$props;
  let { outline = false } = $$props;
  let { size = "" } = $$props;
  let { split = false } = $$props;
  let { tag = null } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.block === void 0 && $$bindings.block && block !== void 0)
    $$bindings.block(block);
  if ($$props.caret === void 0 && $$bindings.caret && caret !== void 0)
    $$bindings.caret(caret);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.inner === void 0 && $$bindings.inner && inner !== void 0)
    $$bindings.inner(inner);
  if ($$props.nav === void 0 && $$bindings.nav && nav !== void 0)
    $$bindings.nav(nav);
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0)
    $$bindings.outline(outline);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.split === void 0 && $$bindings.split && split !== void 0)
    $$bindings.split(split);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  classes = classnames(className, {
    "dropdown-toggle": caret || split,
    "dropdown-toggle-split": split,
    "nav-link": nav,
    show: $context.isOpen
  });
  btnClasses = classnames(classes, "btn", `btn${outline ? "-outline" : ""}-${color}`, size ? `btn-${size}` : false, block ? "d-block w-100" : false, { active });
  $$unsubscribe_context();
  return `${nav ? `<a${spread(
    [
      escape_object($$restProps),
      { href: "#nav" },
      {
        "aria-expanded": escape_attribute_value($context.isOpen)
      },
      { class: escape_attribute_value(classes) }
    ],
    {}
  )}${add_attribute("this", inner, 0)}>${slots.default ? slots.default({}) : `
      <span class="${"visually-hidden"}">${escape(ariaLabel)}</span>
    `}</a>` : `${tag === "div" ? `<div${spread(
    [
      escape_object($$restProps),
      {
        "aria-expanded": escape_attribute_value($context.isOpen)
      },
      { class: escape_attribute_value(classes) }
    ],
    {}
  )}${add_attribute("this", inner, 0)}>${slots.default ? slots.default({}) : `
      <span class="${"visually-hidden"}">${escape(ariaLabel)}</span>
    `}</div>` : `${tag === "span" ? `<span${spread(
    [
      escape_object($$restProps),
      {
        "aria-expanded": escape_attribute_value($context.isOpen)
      },
      { class: escape_attribute_value(classes) }
    ],
    {}
  )}${add_attribute("this", inner, 0)}>${slots.default ? slots.default({}) : `
      <span class="${"visually-hidden"}">${escape(ariaLabel)}</span>
    `}</span>` : `<button${spread(
    [
      escape_object($$restProps),
      { type: "button" },
      {
        "aria-expanded": escape_attribute_value($context.isOpen)
      },
      {
        class: escape_attribute_value(btnClasses)
      }
    ],
    {}
  )}${add_attribute("this", inner, 0)}>${slots.default ? slots.default({}) : `
      <span class="${"visually-hidden"}">${escape(ariaLabel)}</span>
    `}</button>`}`}`}`;
});
const Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "inline", "validated"]);
  let { class: className = "" } = $$props;
  let { inline = false } = $$props;
  let { validated = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.validated === void 0 && $$bindings.validated && validated !== void 0)
    $$bindings.validated(validated);
  classes = classnames(className, {
    "form-inline": inline,
    "was-validated": validated
  });
  return `<form${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</form>`;
});
const FormCheck = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let inputClasses;
  let idFor;
  let $$restProps = compute_rest_props($$props, [
    "class",
    "checked",
    "disabled",
    "group",
    "id",
    "inline",
    "inner",
    "invalid",
    "label",
    "name",
    "size",
    "type",
    "valid",
    "value"
  ]);
  let { class: className = "" } = $$props;
  let { checked = false } = $$props;
  let { disabled = false } = $$props;
  let { group = void 0 } = $$props;
  let { id = void 0 } = $$props;
  let { inline = false } = $$props;
  let { inner = void 0 } = $$props;
  let { invalid = false } = $$props;
  let { label = "" } = $$props;
  let { name = "" } = $$props;
  let { size = "" } = $$props;
  let { type = "checkbox" } = $$props;
  let { valid = false } = $$props;
  let { value = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.inner === void 0 && $$bindings.inner && inner !== void 0)
    $$bindings.inner(inner);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.valid === void 0 && $$bindings.valid && valid !== void 0)
    $$bindings.valid(valid);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  classes = classnames(className, "form-check", {
    "form-switch": type === "switch",
    "form-check-inline": inline,
    [`form-control-${size}`]: size
  });
  inputClasses = classnames("form-check-input", { "is-invalid": invalid, "is-valid": valid });
  idFor = id || label;
  return `<div${add_attribute("class", classes, 0)}>${type === "radio" ? `<input${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(inputClasses)
      },
      { id: escape_attribute_value(idFor) },
      { type: "radio" },
      { disabled: disabled || null },
      { name: escape_attribute_value(name) },
      { value: escape_attribute_value(value) }
    ],
    {}
  )}${value === group ? add_attribute("checked", true, 1) : ""}${add_attribute("this", inner, 0)}>` : `${type === "switch" ? `<input${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(inputClasses)
      },
      { id: escape_attribute_value(idFor) },
      { type: "checkbox" },
      { disabled: disabled || null },
      { name: escape_attribute_value(name) },
      { value: escape_attribute_value(value) }
    ],
    {}
  )}${add_attribute("checked", checked, 1)}${add_attribute("this", inner, 0)}>` : `<input${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(inputClasses)
      },
      { id: escape_attribute_value(idFor) },
      { type: "checkbox" },
      { disabled: disabled || null },
      { name: escape_attribute_value(name) },
      { value: escape_attribute_value(value) }
    ],
    {}
  )}${add_attribute("checked", checked, 1)}${add_attribute("this", inner, 0)}>`}`}
  ${label ? `<label class="${"form-check-label"}"${add_attribute("for", idFor, 0)}>${slots.label ? slots.label({}) : `${escape(label)}`}</label>` : ``}</div>`;
});
const FormFeedback = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "valid", "tooltip"]);
  let { class: className = "" } = $$props;
  let { valid = void 0 } = $$props;
  let { tooltip = false } = $$props;
  let classes;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.valid === void 0 && $$bindings.valid && valid !== void 0)
    $$bindings.valid(valid);
  if ($$props.tooltip === void 0 && $$bindings.tooltip && tooltip !== void 0)
    $$bindings.tooltip(tooltip);
  {
    {
      const validMode = tooltip ? "tooltip" : "feedback";
      classes = classnames(className, valid ? `valid-${validMode}` : `invalid-${validMode}`);
    }
  }
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</div>`;
});
const FormGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "check", "disabled", "floating", "inline", "label", "row", "tag"]);
  let $$slots = compute_slots(slots);
  let { class: className = "" } = $$props;
  let { check = false } = $$props;
  let { disabled = false } = $$props;
  let { floating = false } = $$props;
  let { inline = false } = $$props;
  let { label = "" } = $$props;
  let { row = false } = $$props;
  let { tag = null } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.check === void 0 && $$bindings.check && check !== void 0)
    $$bindings.check(check);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.floating === void 0 && $$bindings.floating && floating !== void 0)
    $$bindings.floating(floating);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.row === void 0 && $$bindings.row && row !== void 0)
    $$bindings.row(row);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  classes = classnames(className, "mb-3", {
    row,
    "form-check": check,
    "form-check-inline": check && inline,
    "form-floating": floating,
    disabled: check && disabled
  });
  return `${tag === "fieldset" ? `<fieldset${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}
    ${label || $$slots.label ? `
      <label>${escape(label)}
        ${slots.label ? slots.label({}) : ``}</label>` : ``}</fieldset>` : `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}
    ${label || $$slots.label ? `
      <label>${escape(label)}
        ${slots.label ? slots.label({}) : ``}</label>` : ``}</div>`}`;
});
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "class",
    "bsSize",
    "checked",
    "color",
    "disabled",
    "feedback",
    "files",
    "group",
    "inner",
    "invalid",
    "label",
    "multiple",
    "name",
    "placeholder",
    "plaintext",
    "readonly",
    "size",
    "type",
    "valid",
    "value"
  ]);
  let { class: className = "" } = $$props;
  let { bsSize = void 0 } = $$props;
  let { checked = false } = $$props;
  let { color = void 0 } = $$props;
  let { disabled = void 0 } = $$props;
  let { feedback = void 0 } = $$props;
  let { files = void 0 } = $$props;
  let { group = void 0 } = $$props;
  let { inner = void 0 } = $$props;
  let { invalid = false } = $$props;
  let { label = void 0 } = $$props;
  let { multiple = void 0 } = $$props;
  let { name = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { plaintext = false } = $$props;
  let { readonly = void 0 } = $$props;
  let { size = void 0 } = $$props;
  let { type = "text" } = $$props;
  let { valid = false } = $$props;
  let { value = "" } = $$props;
  let classes;
  let tag;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.bsSize === void 0 && $$bindings.bsSize && bsSize !== void 0)
    $$bindings.bsSize(bsSize);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.feedback === void 0 && $$bindings.feedback && feedback !== void 0)
    $$bindings.feedback(feedback);
  if ($$props.files === void 0 && $$bindings.files && files !== void 0)
    $$bindings.files(files);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.inner === void 0 && $$bindings.inner && inner !== void 0)
    $$bindings.inner(inner);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.plaintext === void 0 && $$bindings.plaintext && plaintext !== void 0)
    $$bindings.plaintext(plaintext);
  if ($$props.readonly === void 0 && $$bindings.readonly && readonly !== void 0)
    $$bindings.readonly(readonly);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.valid === void 0 && $$bindings.valid && valid !== void 0)
    $$bindings.valid(valid);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        const isNotaNumber = new RegExp("\\D", "g");
        let isBtn = false;
        let formControlClass = "form-control";
        tag = "input";
        switch (type) {
          case "color":
            formControlClass = `form-control form-control-color`;
            break;
          case "range":
            formControlClass = "form-range";
            break;
          case "select":
            formControlClass = `form-select`;
            tag = "select";
            break;
          case "textarea":
            tag = "textarea";
            break;
          case "button":
          case "reset":
          case "submit":
            formControlClass = `btn btn-${color || "secondary"}`;
            isBtn = true;
            break;
          case "hidden":
          case "image":
            formControlClass = void 0;
            break;
          default:
            formControlClass = "form-control";
            tag = "input";
        }
        if (plaintext) {
          formControlClass = `${formControlClass}-plaintext`;
          tag = "input";
        }
        if (size && isNotaNumber.test(size)) {
          console.warn(`Please use the prop "bsSize" instead of the "size" to bootstrap's input sizing.`);
          bsSize = size;
          size = void 0;
        }
        classes = classnames(className, formControlClass, {
          "is-invalid": invalid,
          "is-valid": valid,
          [`form-control-${bsSize}`]: bsSize && !isBtn,
          [`btn-${bsSize}`]: bsSize && isBtn
        });
      }
    }
    $$rendered = `${tag === "input" ? `${type === "text" ? `<input${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(classes) },
        { type: "text" },
        { disabled: disabled || null },
        { name: escape_attribute_value(name) },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { readonly: readonly || null },
        { size: escape_attribute_value(size) }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `${type === "password" ? `<input${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(classes) },
        { type: "password" },
        { disabled: disabled || null },
        { name: escape_attribute_value(name) },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { readonly: readonly || null },
        { size: escape_attribute_value(size) }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `${type === "color" ? `<input${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(classes) },
        { type: "color" },
        { disabled: disabled || null },
        { name: escape_attribute_value(name) },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { readonly: readonly || null }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `${type === "email" ? `<input${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(classes) },
        { type: "email" },
        { disabled: disabled || null },
        { multiple: multiple || null },
        { name: escape_attribute_value(name) },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { readonly: readonly || null },
        { size: escape_attribute_value(size) }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `${type === "file" ? `<input${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(classes) },
        { type: "file" },
        { disabled: disabled || null },
        { invalid: escape_attribute_value(invalid) },
        { multiple: multiple || null },
        { name: escape_attribute_value(name) },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { readonly: readonly || null },
        { valid: escape_attribute_value(valid) }
      ],
      {}
    )}>` : `${type === "checkbox" || type === "radio" || type === "switch" ? `${validate_component(FormCheck, "FormCheck").$$render(
      $$result,
      Object.assign({}, $$restProps, { class: className }, { size: bsSize }, { type }, { disabled }, { invalid }, { label }, { name }, { placeholder }, { readonly }, { valid }, { checked }, { inner }, { group }, { value }),
      {
        checked: ($$value) => {
          checked = $$value;
          $$settled = false;
        },
        inner: ($$value) => {
          inner = $$value;
          $$settled = false;
        },
        group: ($$value) => {
          group = $$value;
          $$settled = false;
        },
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${type === "url" ? `<input${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(classes) },
        { type: "url" },
        { disabled: disabled || null },
        { name: escape_attribute_value(name) },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { readonly: readonly || null },
        { size: escape_attribute_value(size) }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `${type === "number" ? `<input${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(classes) },
        { type: "number" },
        { readonly: readonly || null },
        { name: escape_attribute_value(name) },
        { disabled: disabled || null },
        {
          placeholder: escape_attribute_value(placeholder)
        }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `${type === "date" ? `<input${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(classes) },
        { type: "date" },
        { disabled: disabled || null },
        { name: escape_attribute_value(name) },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { readonly: readonly || null }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `${type === "time" ? `<input${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(classes) },
        { type: "time" },
        { disabled: disabled || null },
        { name: escape_attribute_value(name) },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { readonly: readonly || null }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `${type === "datetime" ? `<input${spread(
      [
        escape_object($$restProps),
        { type: "datetime" },
        { readonly: readonly || null },
        { class: escape_attribute_value(classes) },
        { name: escape_attribute_value(name) },
        { disabled: disabled || null },
        {
          placeholder: escape_attribute_value(placeholder)
        }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `${type === "datetime-local" ? `<input${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(classes) },
        { type: "datetime-local" },
        { disabled: disabled || null },
        { name: escape_attribute_value(name) },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { readonly: readonly || null }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `${type === "month" ? `<input${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(classes) },
        { type: "month" },
        { disabled: disabled || null },
        { name: escape_attribute_value(name) },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { readonly: readonly || null }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `${type === "color" ? `<input${spread(
      [
        escape_object($$restProps),
        { type: "color" },
        { readonly: readonly || null },
        { class: escape_attribute_value(classes) },
        { name: escape_attribute_value(name) },
        { disabled: disabled || null },
        {
          placeholder: escape_attribute_value(placeholder)
        }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `${type === "range" ? `<input${spread(
      [
        escape_object($$restProps),
        { type: "range" },
        { readonly: readonly || null },
        { class: escape_attribute_value(classes) },
        { name: escape_attribute_value(name) },
        { disabled: disabled || null },
        {
          placeholder: escape_attribute_value(placeholder)
        }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `${type === "search" ? `<input${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(classes) },
        { type: "search" },
        { disabled: disabled || null },
        { name: escape_attribute_value(name) },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { readonly: readonly || null },
        { size: escape_attribute_value(size) }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `${type === "tel" ? `<input${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(classes) },
        { type: "tel" },
        { disabled: disabled || null },
        { name: escape_attribute_value(name) },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { readonly: readonly || null },
        { size: escape_attribute_value(size) }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `${type === "week" ? `<input${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(classes) },
        { type: "week" },
        { disabled: disabled || null },
        { name: escape_attribute_value(name) },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { readonly: readonly || null }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `<input${spread(
      [
        escape_object($$restProps),
        { type: escape_attribute_value(type) },
        { readonly: readonly || null },
        { class: escape_attribute_value(classes) },
        { name: escape_attribute_value(name) },
        { disabled: disabled || null },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { value: escape_attribute_value(value) }
      ],
      {}
    )}>`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}` : `${tag === "textarea" ? `<textarea${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(classes) },
        { disabled: disabled || null },
        { name: escape_attribute_value(name) },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { readonly: readonly || null }
      ],
      {}
    )}${add_attribute("this", inner, 0)}>${value || ""}</textarea>` : `${tag === "select" && !multiple ? `<select${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(classes) },
        { name: escape_attribute_value(name) },
        { disabled: disabled || null },
        { readonly: readonly || null }
      ],
      {}
    )}${add_attribute("this", inner, 0)}>${slots.default ? slots.default({}) : ``}</select>

  ` : ``}`}`}
${feedback ? `${Array.isArray(feedback) ? `${each(feedback, (msg) => {
      return `${validate_component(FormFeedback, "FormFeedback").$$render($$result, { valid }, {}, {
        default: () => {
          return `${escape(msg)}`;
        }
      })}`;
    })}` : `${validate_component(FormFeedback, "FormFeedback").$$render($$result, { valid }, {}, {
      default: () => {
        return `${escape(feedback)}`;
      }
    })}`}` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const Modal_svelte_svelte_type_style_lang = "";
function getVerticalClass(vertical) {
  if (vertical === false) {
    return false;
  } else if (vertical === true || vertical === "xs") {
    return "flex-column";
  }
  return `flex-${vertical}-column`;
}
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, [
    "class",
    "tabs",
    "pills",
    "vertical",
    "horizontal",
    "justified",
    "fill",
    "navbar",
    "card"
  ]);
  let { class: className = "" } = $$props;
  let { tabs = false } = $$props;
  let { pills = false } = $$props;
  let { vertical = false } = $$props;
  let { horizontal = "" } = $$props;
  let { justified = false } = $$props;
  let { fill = false } = $$props;
  let { navbar = false } = $$props;
  let { card = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.tabs === void 0 && $$bindings.tabs && tabs !== void 0)
    $$bindings.tabs(tabs);
  if ($$props.pills === void 0 && $$bindings.pills && pills !== void 0)
    $$bindings.pills(pills);
  if ($$props.vertical === void 0 && $$bindings.vertical && vertical !== void 0)
    $$bindings.vertical(vertical);
  if ($$props.horizontal === void 0 && $$bindings.horizontal && horizontal !== void 0)
    $$bindings.horizontal(horizontal);
  if ($$props.justified === void 0 && $$bindings.justified && justified !== void 0)
    $$bindings.justified(justified);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.navbar === void 0 && $$bindings.navbar && navbar !== void 0)
    $$bindings.navbar(navbar);
  if ($$props.card === void 0 && $$bindings.card && card !== void 0)
    $$bindings.card(card);
  classes = classnames(className, navbar ? "navbar-nav" : "nav", horizontal ? `justify-content-${horizontal}` : false, getVerticalClass(vertical), {
    "nav-tabs": tabs,
    "card-header-tabs": card && tabs,
    "nav-pills": pills,
    "card-header-pills": card && pills,
    "nav-justified": justified,
    "nav-fill": fill
  });
  return `<ul${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</ul>`;
});
const NavItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "active"]);
  let { class: className = "" } = $$props;
  let { active = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  classes = classnames(className, "nav-item", active ? "active" : false);
  return `<li${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</li>`;
});
const NavLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "disabled", "active", "href"]);
  let { class: className = "" } = $$props;
  let { disabled = false } = $$props;
  let { active = false } = $$props;
  let { href = "#" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  classes = classnames(className, "nav-link", { disabled, active });
  return `<a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      { class: escape_attribute_value(classes) }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a>`;
});
const Offcanvas_svelte_svelte_type_style_lang = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-vpgqcy{box-shadow:0 1px 8px rgb(0 0 0 / 48%);background-color:#6f1c17}.title.svelte-vpgqcy{margin-right:10px;display:inline;color:#ededed}.subtitle.svelte-vpgqcy{display:inline;font-style:italic;color:#dac485}.tools.svelte-vpgqcy{color:#dac485}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let rules, books, player, gamemaster, adventures, references, utilities, settings;
  $$result.css.add(css);
  return `<header class="${"svelte-vpgqcy"}"><div class="${"container"}"><h1 class="${"title svelte-vpgqcy"}">PF<span class="${"tools svelte-vpgqcy"}">2ools</span></h1>
        <p class="${"subtitle svelte-vpgqcy"}">A suite of tools for 2nd Edition Pathfinder players and Game
            Masters.
        </p></div></header>
<div class="${"container"}"><navbar>${validate_component(Nav, "Nav").$$render($$result, { pills: true }, {}, {
    default: () => {
      return `${validate_component(NavItem, "NavItem").$$render($$result, { href: "/" }, {}, {
        default: () => {
          return `${validate_component(NavLink, "NavLink").$$render($$result, { href: "/" }, {}, {
            default: () => {
              return `Home`;
            }
          })}`;
        }
      })}
            ${validate_component(Dropdown, "Dropdown").$$render(
        $$result,
        {
          isOpen: rules ?? false,
          toggle: () => rules = !rules
        },
        {},
        {
          default: () => {
            return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { nav: true, caret: true }, {}, {
              default: () => {
                return `Rules`;
              }
            })}
                ${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Quick Reference`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Variant Rules &amp; Subsystems`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Tables`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
                    ${validate_component(Dropdown, "Dropdown").$$render(
                  $$result,
                  {
                    direction: "right",
                    isOpen: books ?? false,
                    toggle: () => books = !books
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { nav: true, caret: true }, {}, {
                        default: () => {
                          return `Books`;
                        }
                      })}
                        ${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Browse All`;
                            }
                          })}
                            ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
                            
                            ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { disabled: true }, {}, {
                            default: () => {
                              return `Core Rulebook`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  }
                )}`;
              }
            })}`;
          }
        }
      )}
            ${validate_component(Dropdown, "Dropdown").$$render(
        $$result,
        {
          isOpen: player ?? false,
          toggle: () => player = !player
        },
        {},
        {
          default: () => {
            return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { nav: true, caret: true }, {}, {
              default: () => {
                return `Player`;
              }
            })}
                ${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Ancestries`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Backgrounds`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Classes`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Feats`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Archetypes`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Companions &amp; Familiars`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Optional Features`;
                  }
                })}`;
              }
            })}`;
          }
        }
      )}
            ${validate_component(Dropdown, "Dropdown").$$render(
        $$result,
        {
          isOpen: gamemaster ?? false,
          toggle: () => gamemaster = !gamemaster
        },
        {},
        {
          default: () => {
            return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { nav: true, caret: true }, {}, {
              default: () => {
                return `Game Master`;
              }
            })}
                ${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `GM Screen`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
                    ${validate_component(Dropdown, "Dropdown").$$render(
                  $$result,
                  {
                    direction: "right",
                    isOpen: adventures ?? false,
                    toggle: () => adventures = !adventures
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { nav: true, caret: true }, {}, {
                        default: () => {
                          return `Adventures`;
                        }
                      })}
                        ${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                            default: () => {
                              return `Browse All`;
                            }
                          })}
                            ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
                            
                            ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { disabled: true }, {}, {
                            default: () => {
                              return `Strength of Thousand Contributors`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  }
                )}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Events`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Hazards`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Relic Gifts`;
                  }
                })} 
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Creature Abilities`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Creature Templates`;
                  }
                })}`;
              }
            })}`;
          }
        }
      )}
            ${validate_component(Dropdown, "Dropdown").$$render(
        $$result,
        {
          isOpen: references ?? false,
          toggle: () => references = !references
        },
        {},
        {
          default: () => {
            return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { nav: true, caret: true }, {}, {
              default: () => {
                return `Game Master`;
              }
            })}
                ${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Actions`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Bestiary`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Conditions`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Items`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Spells`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Afflictions`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Rituals`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Vehicles`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Deities`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Languages`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Planes &amp; Places`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Organizations`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Traits`;
                  }
                })}`;
              }
            })}`;
          }
        }
      )}
            ${validate_component(Dropdown, "Dropdown").$$render(
        $$result,
        {
          isOpen: utilities ?? false,
          toggle: () => utilities = !utilities
        },
        {},
        {
          default: () => {
            return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { nav: true, caret: true }, {}, {
              default: () => {
                return `Utilities`;
              }
            })}
                ${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Search`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Homebrew Manager`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Initiative Tracker Player View`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Renderer Demo`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Text Converter`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Changelog`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Privacy Policy`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Licenses`;
                  }
                })}`;
              }
            })}`;
          }
        }
      )}
            ${validate_component(Dropdown, "Dropdown").$$render(
        $$result,
        {
          isOpen: settings ?? false,
          toggle: () => settings = !settings
        },
        {},
        {
          default: () => {
            return `${validate_component(DropdownToggle, "DropdownToggle").$$render($$result, { nav: true, caret: true }, {}, {
              default: () => {
                return `Settings`;
              }
            })}
                ${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Configure Styling`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Save State to File`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Load State from File`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Add as an App`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, { divider: true }, {}, {})}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Preload Images`;
                  }
                })}
                    ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Reset Preloaded Data`;
                  }
                })}`;
              }
            })}`;
          }
        }
      )}
            ${validate_component(Form, "Form").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(FormGroup, "FormGroup").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "search",
                  id: "omnisearch",
                  placeholder: "Search Everywhere..."
                },
                {},
                {}
              )}`;
            }
          })}`;
        }
      })}`;
    }
  })}</navbar>

    ${slots.default ? slots.default({}) : ``}
</div>`;
});
export {
  Layout as default
};
