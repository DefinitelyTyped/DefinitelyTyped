/*! *****************************************************************************
Copyright (c) 2020 Tencent, Inc. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of 
this software and associated documentation files (the "Software"), to deal in 
the Software without restriction, including without limitation the rights to 
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies 
of the Software, and to permit persons to whom the Software is furnished to do 
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all 
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
SOFTWARE.
***************************************************************************** */

declare namespace WechatMiniprogram {
    namespace Behavior {
        type Instance<
            TData extends DataOption,
            TProperty extends PropertyOption,
            TMethod extends MethodOption
        > = Component.Instance<TData, TProperty, TMethod>
        type TrivialInstance = Instance<IAnyObject, IAnyObject, IAnyObject>
        type TrivialOption = Options<IAnyObject, IAnyObject, IAnyObject>
        type Options<
            TData extends DataOption,
            TProperty extends PropertyOption,
            TMethod extends MethodOption
        > = Partial<Data<TData>> &
            Partial<Property<TProperty>> &
            Partial<Method<TMethod>> &
            Partial<OtherOption> &
            Partial<Lifetimes> &
            ThisType<Instance<TData, TProperty, TMethod>>
        interface Constructor {
            <
                TData extends DataOption,
                TProperty extends PropertyOption,
                TMethod extends MethodOption
            >(
                options: Options<TData, TProperty, TMethod>
            ): string
        }

        type DataOption = Component.DataOption
        type PropertyOption = Component.PropertyOption
        type MethodOption = Component.MethodOption
        type Data<D extends DataOption> = Component.Data<D>
        type Property<P extends PropertyOption> = Component.Property<P>
        type Method<M extends MethodOption> = Component.Method<M>

        type DefinitionFilter = Component.DefinitionFilter
        type Lifetimes = Component.Lifetimes

        type OtherOption = Omit<Component.OtherOption, 'options'>
    }
}
/** 注册一个 `behavior`，接受一个 `Object` 类型的参数。*/
declare let Behavior: WechatMiniprogram.Behavior.Constructor
