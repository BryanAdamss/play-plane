import { createRenderer } from 'vue'
import { Container, Text, Sprite, Texture } from 'pixi.js'

export const render = createRenderer<Container, Container>({
  createElement(type) {
    let element

    switch (type) {
      case 'Container':
        element = new Container()
        break

      case 'Sprite':
        element = new Sprite()
        break

      default:
        throw new Error(`type 不存在${type}`)
    }

    return element
  },
  patchProp(el, key, prevValue, nextValue) {
    switch (key) {
      case 'texture':
        ;(el as Sprite).texture = Texture.from(nextValue)
        break

      default:
        el[key] = nextValue
        break
    }
  },
  insert(el, parent) {
    if (el && parent) {
      parent.addChild(el)
    }
  },
  remove(el) {
    if (el.parent) {
      el.parent.removeChild(el)
    }
  },
  createText(text) {
    return new Text(text)
  },
  createComment(text) {
    return new Text(text)
  },
  setText() {},
  setElementText() {},
  parentNode(node) {
    return node.parent
  },
  nextSibling() {
    return null
  },
})

export function createApp(rootComponent) {
  return render.createApp(rootComponent)
}
