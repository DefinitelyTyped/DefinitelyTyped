
declare module scenario
{
    interface ISleep
    {
        (timeSeconds: number): void;
    }

    interface IBrowser
    {
        (): IBrowser;
        navigateTo(url: string);
        navigateTo(url: string, delegate: (url: string) => string);
        reload();
        window():  IWindowApi;
        location():  ILocationApi;
    }

    interface IWindowApi
    {
        href():  void;
        path():  void;
        search():  void;
        hash(): void;
    }

    interface ILocationApi
    {
        url():  void;
        path():  void;
        search():  void;
        hash(): void;
    }



    interface IElement
    {
        (): IElement;
        (selector: string): IElement;
        count(): number;
        click(): void;

    }



}


declare var browser: scenario.IBrowser;
declare var element: scenario.IElement;
declare var sleep: scenario.ISleep;

