// Type definitions for dingtalk-robot-sender 1.1
// Project: https://github.com/x-cold/dingtalk-robot
// Definitions by: bangbang93 <https://github.com/bangbang93>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1
import { AxiosResponse } from 'axios';

interface WebHookOptions {
    webhook: string;
    httpclient?: any;
}

interface BaseUrlOptions {
    baseUrl: string;
    accessToken: string;
    httpclient?: any;
}

declare namespace Message {
  interface Text {
    msgtype: 'text';
    text: {
        content: string;
    };
    at?: {
        atMobiles: string[];
        isAtAll: boolean;
    };
  }

  interface Link {
    msgtype: 'link';
    link: {
      text: string;
      title: string;
      picUrl: string;
      messageUrl: string;
    };
  }

  interface Markdown {
    msgtype: 'markdown';
    markdown: {
      title: string;
      text: string;
      atMobiles: string[];
      isAtAll: boolean;
    };
  }

  interface ActionCard {
    msgtype: 'actionCard';
    actionCard: {
      title: string;
      text: string;
      singleTitle?: string;
      singleURL?: string;
      hideAvatar: '0' | '1';
      btnOrientation: '0' | '1';
      btns?: Array<{
        title: string;
        actionURL: string;
      }>;
    };
  }

  interface FeedCardItem {
    msgtype: 'feedCard';
    feedCard: {
      title: string;
      messageURL: string;
      picURL: string;
    };
  }
}

type MessageType = Message.Text | Message.Link | Message.Markdown | Message.ActionCard | Message.FeedCardItem;

declare class ChatBot {
    /**
     * 机器人工厂，所有的消息推送项目都会调用 this.webhook 接口进行发送
     *
     * @param options.webhook 完整的接口地址
     * @param options.baseUrl 接口地址
     * @param options.accessToken accessToken
     * @param options.httpclient 例如 urllib / axios
     */
    constructor(options: WebHookOptions | BaseUrlOptions);

    /**
     * 发送钉钉消息
     *
     * @param content 发动的消息对象
     * @return
     */
     send(content: MessageType): Promise<AxiosResponse>;

    /**
     * 发送纯文本消息，支持@群内成员
     *
     * @param content 消息内容
     * @param at 群内@成员的手机号
     * @return
     */
    text(content: string, at?: Message.Text['at']): Promise<AxiosResponse>;

    /**
     * 发送单个图文链接
     *
     * @param link.title 标题
     * @param link.text 消息内容
     * @param link.messageUrl 跳转的Url
     * @param link.picUrl 图片的链接
     * @return
     */
    link(link: Message.Link['link']): Promise<AxiosResponse>;

    /**
     * 发送Markdown消息
     *
     * @param title 标题
     * @param text 消息内容(支持Markdown)
     * @return
     */
    markdown(title: string, text: string, at: Message.Text['at']): Promise<AxiosResponse>;

    /**
     * 发送actionCard(动作卡片)
     * Ps: 支持多个按钮，支持Markdown
     *
     * @param card.title 标题
     * @param card.text 消息内容
     * @param card.hideAvatar 隐藏发送者头像(1隐藏，0显示，默认为0)
     * @param card.btnOrientation 按钮排列的方向(0竖直，1横向，默认为0)
     * @param card.btn.title 某个按钮标题
     * @param card.btn.actionURL 某个按钮链接
     * @return
     */
    actionCard(card: Message.ActionCard['actionCard']): Promise<AxiosResponse>;

    /**
     * 发送feedCard，支持多图文链接
     * Ps: links可包含多个link，建议不要超过4个
     *
     * @param link.title 标题
     * @param link.text 消息内容
     * @param link.messageUrl 跳转的Url
     * @param link.picUrl 图片的链接
     * @return
     */
    feedCard(links: Message.FeedCardItem[]): Promise<AxiosResponse>;
  }

  export = ChatBot;
