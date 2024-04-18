import * as React from 'react'
import { createReactMaterial, withMaterialNode } from '@core/material'

export interface TextProps {
  children?: React.ReactNode
}

const TextView =  React.forwardRef<HTMLDivElement, TextProps>((props, ref) => {
  return (
    <div ref={ref} >
      {props.children}
    </div>
  )
})

export const Text = createReactMaterial(withMaterialNode<TextProps>(TextView), {
  displayName: '文本组件'
})