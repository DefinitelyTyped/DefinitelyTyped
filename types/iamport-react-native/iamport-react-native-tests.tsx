import * as React from 'react';

import IMP, { CallbackRsp, PaymentData } from 'iamport-react-native';

const IamportPayment = () => {
    const callback = (response: CallbackRsp) => {};

    const data: PaymentData = {
        pg: 'html5_inicis',
        pay_method: 'card',
        name: '아임포트 결제데이터 분석',
        merchant_uid: `mid_${new Date().getTime()}`,
        amount: 39000,
        buyer_name: '홍길동',
        buyer_tel: '01012345678',
        buyer_email: 'example@naver.com',
        buyer_addr: '서울시 강남구 신사동 661-16',
        buyer_postcode: '06018',
        app_scheme: 'example',
    };

    return <IMP.Payment userCode={'iamport'} tierCode={'AAA'} data={data} callback={callback} />;
};

export default IamportPayment;
