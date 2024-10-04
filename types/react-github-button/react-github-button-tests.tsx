import GitHubButton from "react-github-button";

// $ExpectType Element
<GitHubButton
    type="stargazers"
    namespace="benjycui"
    repo="react-github-button"
/>;

// props.size is optional
// $ExpectType Element
<GitHubButton
    type="stargazers"
    namespace="benjycui"
    repo="react-github-button"
    size="large"
/>;

// props.className is optional
// $ExpectType Element
<GitHubButton
    type="stargazers"
    namespace="benjycui"
    repo="react-github-button"
    className="optional-class"
/>;
