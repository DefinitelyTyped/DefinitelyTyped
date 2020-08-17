// Type definitions for d3pie 0.1.9
// Project: https://github.com/benkeen/d3pie
// Definitions by: Petryshyn Sergii <https://github.com/mc-petry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace d3pie {
  interface ID3PieChart {
    redraw(): void
    openSegment(index: number): void
    closeSegment(index: void): void
    getOpenSegment(): any
    updateProp(propKey: string, value: any): void
    destroy(): void
  }

  interface ID3PieStyleOptions {
    color?: string
    fontSize?: number
    font?: string
  }

  interface ID3PieTextOptions extends ID3PieStyleOptions {
    text?: string
  }

  interface ID3PieLabelsOptions {
    format?: 'label' | 'value' | 'percentage' | 'label-value1' | 'label-value2' | 'label-percentage1' | 'label-percentage2'
    hideWhenLessThanPercentage?: number
  }

  interface ID3PieOptions {
    header?: {
      title?: ID3PieTextOptions
      subtitle?: ID3PieTextOptions
      location?: 'top-center' | 'top-left' | 'pie-center'
      titleSubtitlePadding?: number
    }
    footer?: { location?: 'left' } & ID3PieTextOptions
    size?: {
      canvasHeight?: number
      canvasWidth?: number
      pieOuterRadius?: string | number
      pieInnerRadius?: string | number
    }
    data: {
      sortOrder?: 'none' | 'random' | 'value-asc' | 'value-desc' | 'label-asc' | 'label-desc'
      smallSegmentGrouping?: {
        enabled?: boolean
        value?: number
        valueType?: 'percentage' | 'value'
        label?: string
        color?: string
      }
      content: {
        label: string
        value: number
        color?: string
      }[]
    }
    labels?: {
      outer?: { pieDistance?: number } & ID3PieLabelsOptions
      inner?: ID3PieLabelsOptions
      mainLabel?: ID3PieStyleOptions
      percentage?: { decimalPlaces?: number } & ID3PieStyleOptions
      value?: ID3PieStyleOptions
      lines?: {
        enabled?: boolean
        style?: 'curved' | 'straight'
        color?: string
      }
      truncation?: {
        enabled?: boolean
        truncateLength?: number
      }
      formatter?: (context: {
        section: 'outer' | 'inner'
        value: number
        label: string
      }) => string
    }
    effects?: {
      load?: {
        effect?: 'none' | 'default'
        speed?: number
      }
      pullOutSegmentOnClick?: {
        effect?: 'none' | 'linear' | 'bounce' | 'elastic' | 'back'
        speed?: number
        size?: number
      }
      highlightSegmentOnMouseover?: boolean
      highlightLuminosity?: number
    }
    tooltips?: {
      enabled?: boolean
      type?: 'placeholder' | 'caption'
      string?: string
      placeholderParser?: (index: number, data: { label?: string, percentage?: number, value?: number }) => void
      styles?: {
        fadeInSpeed?: number
        backgroundColor?: string
        backgroundOpacity?: number
        color?: string
        borderRadius?: number
        font?: string
        fontSize?: number
        padding?: number
      }
    }
    misc?: {
      colors?: {
        background?: string
        segments?: string[]
        segmentStroke?: string
      }
      gradient?: {
        enabled?: boolean
        percentage?: number
        color?: string
      }
      canvasPadding?: {
        top?: number
        right?: number
        bottom?: number
        left?: number
      }
      pieCenterOffset?: {
        x?: number
        y?: number
      }
      cssPrefix?: string
    }
    callbacks?: {
      onload?: Function
      onMouseoverSegment?: Function
      onMouseoutSegment?: Function
      onClickSegment?: Function
    }
  }

  interface ID3PieClass {
    new (id: string | HTMLElement, options: ID3PieOptions): ID3PieChart
  }
}

declare const d3pie: d3pie.ID3PieClass
