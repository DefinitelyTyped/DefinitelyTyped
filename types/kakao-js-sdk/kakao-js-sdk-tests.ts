/**
 * Example from https://developers.kakao.com/docs/latest/ko/getting-started/sdk-js
 */
function test_init() {
    Kakao.init("JAVASCRIPT_KEY");
    console.log(Kakao.isInitialized());
}

/**
 * Example from https://developers.kakao.com/docs/latest/ko/kakaologin/js#login
 */
function test_loginAuthorize() {
    Kakao.Auth.authorize({
        redirectUri: "{REDIRECT_URI}",
    });
}

function test_loginSetAccessToken() {
    const ACCESS_TOKEN = "";
    Kakao.Auth.setAccessToken(ACCESS_TOKEN);
}

function test_logout() {
    if (!Kakao.Auth.getAccessToken()) {
        console.log("Not logged in.");
        return;
    }
    Kakao.Auth.logout(() => {
        console.log(Kakao.Auth.getAccessToken());
    });
}

function test_userUnlink() {
    Kakao.API.request({
        url: "/v1/user/unlink",
        success(response) {
            console.log(response);
        },
        fail(error) {
            console.log(error);
        },
    });
}

function test_userMe1() {
    Kakao.API.request({
        url: "/v2/user/me",
        success(response) {
            console.log(response);
        },
        fail(error) {
            console.log(error);
        },
    });

    Kakao.API.request({
        url: "/v2/user/me",
        data: {
            property_keys: ["kakao_account.email", "kakao_account.gender"],
        },
        success(response) {
            console.log(response);
        },
        fail(error) {
            console.log(error);
        },
    });
}

function test_userUpdateProfile() {
    Kakao.API.request({
        url: "/v1/user/update_profile",
        data: {
            properties: {
                nickname: "홍길동",
                age: "22",
            },
        },
        success(response) {
            console.log(response);
        },
        fail(error) {
            console.log(error);
        },
    });
}

function test_loginAdditionalAgreement() {
    Kakao.Auth.authorize({
        redirectUri: "{REDIRECT_URI}",
        scope: "account_email,gender",
    });

    Kakao.Auth.login({
        scope: "account_email,gender",
        success(response) {
            console.log(response);
        },
        fail(error) {
            console.log(error);
        },
    });
}

function test_loginUserAgreement() {
    Kakao.API.request({
        url: "/v2/user/scopes",
        success(response) {
            console.log(response);
        },
        fail(error) {
            console.log(error);
        },
    });

    Kakao.API.request({
        url: "/v2/user/scopes",
        data: {
            scopes: ["account_email", "gender"],
        },
        success(response) {
            console.log(response);
        },
        fail(error) {
            console.log(error);
        },
    });
}

function test_loginUserRevokeAgreement() {
    Kakao.API.request({
        url: "/v2/user/revoke/scopes",
        data: {
            scopes: ["account_email", "gender"],
        },
        success(response) {
            console.log(response);
        },
        fail(error) {
            console.log(error);
        },
    });
}

function test_loginPopup() {
    Kakao.Auth.login({
        success(response) {
            console.log(response);
        },
        fail(error) {
            console.log(error);
        },
    });

    Kakao.Auth.createLoginButton({
        container: "#CONTAINER_ID",
        success(response) {
            console.log(response);
        },
        fail(error) {
            console.log(error);
        },
    });
}

/**
 * Example from https://developers.kakao.com/docs/latest/ko/kakaotalk-social/js
 */
function test_getProfile() {
    Kakao.API.request({
        url: "/v1/api/talk/profile",
        success(response) {
            console.log(response);
        },
        fail(error) {
            console.log(error);
        },
    });
}

function test_getFriends() {
    Kakao.API.request({
        url: "/v1/api/talk/friends",
        success(response) {
            console.log(response);
        },
        fail(error) {
            console.log(error);
        },
    });
}

/**
 * Example from https://developers.kakao.com/docs/latest/ko/message/js-link
 */
function test_linkCreateDefaultButtonTypeFeed() {
    Kakao.Link.createDefaultButton({
        container: "#CONTAINER_ID",
        objectType: "feed",
        content: {
            title: "디저트 사진",
            description: "아메리카노, 빵, 케익",
            imageUrl: "http://mud-kage.kakao.co.kr/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
            link: {
                mobileWebUrl: "https://developers.kakao.com",
                androidExecParams: "test",
            },
        },
        social: {
            likeCount: 10,
            commentCount: 20,
            sharedCount: 30,
        },
        buttons: [
            {
                title: "웹으로 이동",
                link: {
                    mobileWebUrl: "https://developers.kakao.com",
                },
            },
            {
                title: "앱으로 이동",
                link: {
                    mobileWebUrl: "https://developers.kakao.com",
                },
            },
        ],
    });
}

function test_linkCreateDefaultButtonTypeList() {
    Kakao.Link.createDefaultButton({
        container: "#create-kakao-link-btn",
        objectType: "list",
        headerTitle: "WEEKLY MAGAZINE",
        headerLink: {
            mobileWebUrl: "https://developers.kakao.com",
            webUrl: "https://developers.kakao.com",
        },
        contents: [
            {
                title: "취미의 특징, 탁구",
                description: "스포츠",
                imageUrl: "http://k.kakaocdn.net/dn/bDPMIb/btqgeoTRQvd/49BuF1gNo6UXkdbKecx600/kakaolink40_original.png",
                link: {
                    mobileWebUrl: "https://developers.kakao.com",
                    webUrl: "https://developers.kakao.com",
                },
            },
            {
                title: "크림으로 이해하는 커피이야기",
                description: "음식",
                imageUrl: "http://k.kakaocdn.net/dn/QPeNt/btqgeSfSsCR/0QJIRuWTtkg4cYc57n8H80/kakaolink40_original.png",
                link: {
                    mobileWebUrl: "https://developers.kakao.com",
                    webUrl: "https://developers.kakao.com",
                },
            },
            {
                title: "감성이 가득한 분위기",
                description: "사진",
                imageUrl: "http://k.kakaocdn.net/dn/c7MBX4/btqgeRgWhBy/ZMLnndJFAqyUAnqu4sQHS0/kakaolink40_original.png",
                link: {
                    mobileWebUrl: "https://developers.kakao.com",
                    webUrl: "https://developers.kakao.com",
                },
            },
        ],
        buttons: [
            {
                title: "웹으로 보기",
                link: {
                    mobileWebUrl: "https://developers.kakao.com",
                    webUrl: "https://developers.kakao.com",
                },
            },
            {
                title: "앱으로 보기",
                link: {
                    mobileWebUrl: "https://developers.kakao.com",
                    webUrl: "https://developers.kakao.com",
                },
            },
        ],
    });
}

function test_linkCreateDefaultButtonTypeLocation() {
    Kakao.Link.createDefaultButton({
        container: "#create-kakao-link-btn",
        objectType: "location",
        address: "경기 성남시 분당구 판교역로 235 에이치스퀘어 N동 8층",
        addressTitle: "카카오 판교오피스 카페톡",
        content: {
            title: "신메뉴 출시♥︎ 체리블라썸라떼",
            description: "이번 주는 체리블라썸라떼 1+1",
            imageUrl: "http://k.kakaocdn.net/dn/bSbH9w/btqgegaEDfW/vD9KKV0hEintg6bZT4v4WK/kakaolink40_original.png",
            link: {
                mobileWebUrl: "https://developers.kakao.com",
                webUrl: "https://developers.kakao.com",
            },
        },
        social: {
            likeCount: 286,
            commentCount: 45,
            sharedCount: 845,
        },
        buttons: [
            {
                title: "웹으로 보기",
                link: {
                    mobileWebUrl: "https://developers.kakao.com",
                    webUrl: "https://developers.kakao.com",
                },
            },
        ],
    });
}

function test_linkCreateDefaultButtonTypeCommerce() {
    Kakao.Link.createDefaultButton({
        container: "#create-kakao-link-btn",
        objectType: "commerce",
        content: {
            title: "언제 어디든, 더 쉽고 편하게 당신의 일상을 더 즐겁게, 헤이 라이언의 이야기를 들려드릴게요.",
            imageUrl: "http://k.kakaocdn.net/dn/dScJiJ/btqB3cwK1Hi/pv5qHVwetz5RZfPZR3C5K1/kakaolink40_original.png",
            link: {
                mobileWebUrl: "https://developers.kakao.com",
                webUrl: "https://developers.kakao.com",
            },
        },
        commerce: {
            productName: "카카오미니",
            regularPrice: 100000,
            discountRate: 10,
            discountPrice: 90000,
        },
        buttons: [
            {
                title: "구매하기",
                link: {
                    mobileWebUrl: "https://developers.kakao.com",
                    webUrl: "https://developers.kakao.com",
                },
            },
            {
                title: "공유하기",
                link: {
                    mobileWebUrl: "https://developers.kakao.com",
                    webUrl: "https://developers.kakao.com",
                },
            },
        ],
    });
}

function test_linkCreateDefaultButtonTypeText() {
    Kakao.Link.createDefaultButton({
        container: "#create-kakao-link-btn",
        objectType: "text",
        text:
            "기본 템플릿으로 제공되는 텍스트 템플릿은 텍스트를 최대 200자까지 표시할 수 있습니다. 텍스트 템플릿은 텍스트 영역과 하나의 기본 버튼을 가집니다. 임의의 버튼을 설정할 수도 있습니다. 여러 장의 이미지, 프로필 정보 등 보다 확장된 형태의 카카오링크는 다른 템플릿을 이용해 보낼 수 있습니다.",
        link: {
            mobileWebUrl: "https://developers.kakao.com",
            webUrl: "https://developers.kakao.com",
        },
    });
}

function test_linkSendDefaultTypeFeed() {
    Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
            title: "디저트 사진",
            description: "아메리카노, 빵, 케익",
            imageUrl: "http://mud-kage.kakao.co.kr/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
            link: {
                mobileWebUrl: "https://developers.kakao.com",
                androidExecParams: "test",
            },
        },
        social: {
            likeCount: 10,
            commentCount: 20,
            sharedCount: 30,
        },
        buttons: [
            {
                title: "웹으로 이동",
                link: {
                    mobileWebUrl: "https://developers.kakao.com",
                },
            },
            {
                title: "앱으로 이동",
                link: {
                    mobileWebUrl: "https://developers.kakao.com",
                },
            },
        ],
    });
}

function test_linkSendDefaultTypeList() {
    Kakao.Link.sendDefault({
        objectType: "list",
        headerTitle: "WEEKLY MAGAZINE",
        headerLink: {
            mobileWebUrl: "https://developers.kakao.com",
            webUrl: "https://developers.kakao.com",
        },
        contents: [
            {
                title: "취미의 특징, 탁구",
                description: "스포츠",
                imageUrl: "http://k.kakaocdn.net/dn/bDPMIb/btqgeoTRQvd/49BuF1gNo6UXkdbKecx600/kakaolink40_original.png",
                link: {
                    mobileWebUrl: "https://developers.kakao.com",
                    webUrl: "https://developers.kakao.com",
                },
            },
            {
                title: "크림으로 이해하는 커피이야기",
                description: "음식",
                imageUrl: "http://k.kakaocdn.net/dn/QPeNt/btqgeSfSsCR/0QJIRuWTtkg4cYc57n8H80/kakaolink40_original.png",
                link: {
                    mobileWebUrl: "https://developers.kakao.com",
                    webUrl: "https://developers.kakao.com",
                },
            },
            {
                title: "감성이 가득한 분위기",
                description: "사진",
                imageUrl: "http://k.kakaocdn.net/dn/c7MBX4/btqgeRgWhBy/ZMLnndJFAqyUAnqu4sQHS0/kakaolink40_original.png",
                link: {
                    mobileWebUrl: "https://developers.kakao.com",
                    webUrl: "https://developers.kakao.com",
                },
            },
        ],
        buttons: [
            {
                title: "웹으로 보기",
                link: {
                    mobileWebUrl: "https://developers.kakao.com",
                    webUrl: "https://developers.kakao.com",
                },
            },
            {
                title: "앱으로 보기",
                link: {
                    mobileWebUrl: "https://developers.kakao.com",
                    webUrl: "https://developers.kakao.com",
                },
            },
        ],
    });
}

function test_linkSendDefaultTypeLocation() {
    Kakao.Link.sendDefault({
        objectType: "location",
        address: "경기 성남시 분당구 판교역로 235 에이치스퀘어 N동 8층",
        addressTitle: "카카오 판교오피스 카페톡",
        content: {
            title: "신메뉴 출시♥︎ 체리블라썸라떼",
            description: "이번 주는 체리블라썸라떼 1+1",
            imageUrl: "http://k.kakaocdn.net/dn/bSbH9w/btqgegaEDfW/vD9KKV0hEintg6bZT4v4WK/kakaolink40_original.png",
            link: {
                mobileWebUrl: "https://developers.kakao.com",
                webUrl: "https://developers.kakao.com",
            },
        },
        social: {
            likeCount: 286,
            commentCount: 45,
            sharedCount: 845,
        },
        buttons: [
            {
                title: "웹으로 보기",
                link: {
                    mobileWebUrl: "https://developers.kakao.com",
                    webUrl: "https://developers.kakao.com",
                },
            },
        ],
    });
}

function test_linkSendDefaultTypeCommerce() {
    Kakao.Link.sendDefault({
        objectType: "commerce",
        content: {
            title: "언제 어디든, 더 쉽고 편하게 당신의 일상을 더 즐겁게, 헤이 라이언의 이야기를 들려드릴게요.",
            imageUrl: "http://k.kakaocdn.net/dn/dScJiJ/btqB3cwK1Hi/pv5qHVwetz5RZfPZR3C5K1/kakaolink40_original.png",
            link: {
                mobileWebUrl: "https://developers.kakao.com",
                webUrl: "https://developers.kakao.com",
            },
        },
        commerce: {
            productName: "카카오미니",
            regularPrice: 100000,
            discountRate: 10,
            discountPrice: 90000,
        },
        buttons: [
            {
                title: "구매하기",
                link: {
                    mobileWebUrl: "https://developers.kakao.com",
                    webUrl: "https://developers.kakao.com",
                },
            },
            {
                title: "공유하기",
                link: {
                    mobileWebUrl: "https://developers.kakao.com",
                    webUrl: "https://developers.kakao.com",
                },
            },
        ],
    });
}

function test_linkSendDefaultTypeText() {
    Kakao.Link.sendDefault({
        objectType: "text",
        text:
            "기본 템플릿으로 제공되는 텍스트 템플릿은 텍스트를 최대 200자까지 표시할 수 있습니다. 텍스트 템플릿은 텍스트 영역과 하나의 기본 버튼을 가집니다. 임의의 버튼을 설정할 수도 있습니다. 여러 장의 이미지, 프로필 정보 등 보다 확장된 형태의 카카오링크는 다른 템플릿을 이용해 보낼 수 있습니다.",
        link: {
            mobileWebUrl: "https://developers.kakao.com",
            webUrl: "https://developers.kakao.com",
        },
    });
}

const TEMPLATE_ID = 0; // templateId is kakao api integer key

function test_linkCreateCustomButton() {
    Kakao.Link.createCustomButton({
        container: "#kakao-link-btn",
        templateId: TEMPLATE_ID,
        templateArgs: {
            title: "제목 영역입니다.",
            description: "설명 영역입니다.",
        },
    });
}

function test_linkSendCustom() {
    Kakao.Link.sendCustom({
        templateId: TEMPLATE_ID,
        templateArgs: {
            title: "제목 영역입니다.",
            description: "설명 영역입니다.",
        },
    });
}

function test_linkCreateScrapButtonDefault() {
    Kakao.Link.createScrapButton({
        container: "#kakao-link-btn",
        requestUrl: "https://developers.kakao.com",
    });
}

function test_linkSendScrapDefault() {
    Kakao.Link.sendScrap({
        requestUrl: "https://developers.kakao.com",
    });
}

function test_linkCreateScrapButtonCustom() {
    Kakao.Link.createScrapButton({
        container: "#kakao-link-btn",
        requestUrl: "https://developers.kakao.com",
        templateId: TEMPLATE_ID,
    });
}

function test_linkCreateSendScrapCustom() {
    Kakao.Link.sendScrap({
        requestUrl: "https://developers.kakao.com",
        templateId: TEMPLATE_ID,
    });
}

function test_linkSuccessCallback() {
    Kakao.Link.sendDefault({
        objectType: "text",
        text: "간단한 JavaScript SDK 샘플과 함께 카카오 플랫폼 서비스 개발을 시작해 보세요.",
        link: {
            mobileWebUrl: "https://developers.kakao.com",
            webUrl: "https://developers.kakao.com",
        },
        serverCallbackArgs: {
            // 사용자 정의 파라미터 설정
            key: "value",
        },
    });
}

function test_linkImageUpload() {
    const files = new FileList();

    Kakao.Link.uploadImage({
        file: files,
    }).then(res => {
        console.log(res);
    });
}

function test_linkImageScrap() {
    const url = "";

    Kakao.Link.scrapImage({
        imageUrl: url,
    }).then(res => {
        console.log(res);
    });
}

function test_linkImageDelete() {
    const url = "";
    Kakao.Link.deleteImage({
        imageUrl: url,
    });
}

/**
 * Example from https://developers.kakao.com/docs/latest/ko/kakaostory/js
 */
function test_storyCreateFollowButton() {
    Kakao.Story.createFollowButton({
        container: "#kakaostory-follow-button",
        id: "kakao",
    });
}

function test_storyCreateShareButton() {
    Kakao.Story.createShareButton({
        container: "#kakaostory-share-button",
        url: "https://developers.kakao.com",
        text: "카카오 개발자 사이트로 놀러오세요! #개발자 #카카오 :)",
    });
}

function test_storyOpen() {
    Kakao.Story.open({
        url: "http://blog.kakaocorp.co.kr/390",
        text: "카카오검색에서 카카오스토리를! #카카오스토리 #카카오검색 :)",
    });
}

function test_storyShare() {
    Kakao.Story.share({
        url: "https://developers.kakao.com",
        text: "카카오 개발자 사이트로 놀러오세요! #개발자 #카카오 :)",
    });
}

/**
 * Example from https://developers.kakao.com/docs/latest/ko/kakaonavi/js
 */
function test_naviStart() {
    Kakao.Navi.start({
        name: "현대백화점 판교점",
        x: 127.11205203011632,
        y: 37.39279717586919,
        coordType: "wgs84",
    });
}

function test_naviShare() {
    Kakao.Navi.share({
        name: "현대백화점 판교점",
        x: 127.11205203011632,
        y: 37.39279717586919,
        coordType: "wgs84",
    });
}
