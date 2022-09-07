import * as React from 'react';
import {
    render,
    Mjml,
    MjmlHead,
    MjmlTitle,
    MjmlPreview,
    MjmlBody,
    MjmlSection,
    MjmlColumn,
    MjmlButton,
    MjmlImage,
    MjmlText,
    MjmlClass,
    MjmlAccordion,
    MjmlAccordionElement,
    MjmlAccordionText,
    MjmlAccordionTitle,
    MjmlAll,
    MjmlAttributes,
    MjmlBreakpoint,
    MjmlCarousel,
    MjmlCarouselImage,
    MjmlDivider,
    MjmlFont,
    MjmlGroup,
    MjmlHero,
    MjmlNavbar,
    MjmlNavbarLink,
    MjmlRaw,
    MjmlSocial,
    MjmlSocialElement,
    MjmlSpacer,
    MjmlStyle,
    MjmlTable,
    MjmlWrapper,
    MjmlHtmlAttributes,
    MjmlSelector,
    MjmlHtmlAttribute
} from 'mjml-react';

import { MjmlComment, MjmlConditionalComment, MjmlTrackingPixel, MjmlYahooStyle, MjmlHtml } from 'mjml-react/extensions';

import {
    addQueryParams,
    fixConditionalComment,
    getTextAlign,
    namedEntityToHexCode,
    toMobileFontSize,
    useHttps,
    renderToJson,
    renderToJson2
} from 'mjml-react/utils';

function renderOutTestEmail() {
    // $ExpectType { html: string; errors: MjmlError[]; }
    const result = render(
        <Mjml>
            <MjmlHead>
                <MjmlTitle>Last Minute Offer</MjmlTitle>
                <MjmlPreview>Last Minute Offer...</MjmlPreview>
            </MjmlHead>

            <MjmlBody width={500}>
                <MjmlSection fullWidth backgroundColor="#efefef">
                    <MjmlColumn>
                        <MjmlImage src="https://static.wixstatic.com/media/5cb24728abef45dabebe7edc1d97ddd2.jpg" />
                    </MjmlColumn>
                </MjmlSection>
                <MjmlSection>
                    <MjmlColumn>
                        <MjmlButton padding="20px" backgroundColor="#346DB7" href="https://www.wix.com/" fontWeight="initial" letterSpacing="normal">
                            I like it!
                        </MjmlButton>
                    </MjmlColumn>
                    <MjmlColumn>
                        <MjmlText />
                        <MjmlText>text</MjmlText>
                    </MjmlColumn>
                </MjmlSection>
            </MjmlBody>
        </Mjml>,
        { validationLevel: 'soft' },
    );
}

// TestMjmlTag
{
    const minProps: React.ReactNode = <Mjml />;
    const maxProps: React.ReactNode = (
        <Mjml lang="" owa="">
            child
        </Mjml>
    );
}
// TestMjmlHeadTag
{
    const minProps: React.ReactNode = <MjmlHead />;
    const maxProps: React.ReactNode = <MjmlHead>child</MjmlHead>;
}
// TestMjmlAttributesTag
{
    const minProps: React.ReactNode = <MjmlAttributes />;
    const maxProps: React.ReactNode = <MjmlAttributes>child</MjmlAttributes>;
}
// TestMjmlAllTag
{
    const minProps: React.ReactNode = <MjmlAll />;
    const maxProps: React.ReactNode = <MjmlAll any="any">child</MjmlAll>;
}
// TestMjmlClassTag
{
    const minProps: React.ReactNode = <MjmlClass name="" />;
    const maxProps: React.ReactNode = (
        <MjmlClass name="" any="any">
            child
        </MjmlClass>
    );
}
// TestMjmlHtmlAttributesTag
{
    const minProps: React.ReactNode = <MjmlHtmlAttributes />;
    const maxProps: React.ReactNode = <MjmlHtmlAttributes>child</MjmlHtmlAttributes>;
}
// TestMjmlSelectorTag
{
    const minProps: React.ReactNode = <MjmlSelector path="div.hello" />;
    const maxProps: React.ReactNode = <MjmlSelector path="div.hello">child</MjmlSelector>;
}
// TestMjmlHtmlAttributesTag
{
    const minProps: React.ReactNode = <MjmlHtmlAttribute name="data-testid" />;
    const maxProps: React.ReactNode = <MjmlHtmlAttribute name="data-testid">child</MjmlHtmlAttribute>;
}
// TestMjmlBreakpointTag
{
    const minProps: React.ReactNode = <MjmlBreakpoint />;
    const maxProps: React.ReactNode = <MjmlBreakpoint width="" />;
}
// TestMjmlBodyTag
{
    const minProps: React.ReactNode = <MjmlBody />;
    const maxProps: React.ReactNode = (
        <MjmlBody cssClass="" mjClass="" width={1} backgroundColor="">
            child
        </MjmlBody>
    );
}
// TestMjmlFontTag
{
    const minProps: React.ReactNode = <MjmlFont />;
    const maxProps: React.ReactNode = (
        <MjmlFont href="" name="">
            child
        </MjmlFont>
    );
}
// TestMjmlPreviewTag
{
    const minProps: React.ReactNode = <MjmlPreview />;
    const maxProps: React.ReactNode = <MjmlPreview>""</MjmlPreview>;

    // children cannot be anything other than string
    // prettier-ignore
    // @ts-expect-error
    const childError: React.ReactNode = <MjmlPreview><p>""</p></MjmlPreview>;
}
// TestMjmlStyleTag
{
    const minProps: React.ReactNode = <MjmlStyle />;
    const maxProps: React.ReactNode = <MjmlStyle inline>child</MjmlStyle>;

    // children cannot be anything other than string
    // prettier-ignore
    // @ts-expect-error
    const childError: React.ReactNode = <MjmlStyle><p>""</p></MjmlStyle>;
}
// TestMjmlTitleTag
{
    const minProps: React.ReactNode = <MjmlTitle />;
    const maxProps: React.ReactNode = <MjmlTitle>""</MjmlTitle>;

    // children cannot be anything other than string
    // prettier-ignore
    // @ts-expect-error
    const childError: React.ReactNode = <MjmlStyle><p>""</p></MjmlStyle>;
}
// TestMjmlButtonTag
{
    const minProps: React.ReactNode = <MjmlButton />;
    const maxProps: React.ReactNode = <MjmlButton>child</MjmlButton>;
}
// TestMjmlColumnTag
{
    const minProps: React.ReactNode = <MjmlColumn />;
    const maxProps: React.ReactNode = <MjmlColumn>child</MjmlColumn>;
    const innerBackgroundColor: React.ReactNode = <MjmlColumn innerBackgroundColor="#BADA55">child</MjmlColumn>;
    // @ts-expect-error
    const innerBackgroundColorError: React.ReactNode = <MjmlColumn innerBackgroundColor={1}>child</MjmlColumn>;
}
// TestMjmlDividerTag
{
    const minProps: React.ReactNode = <MjmlDivider />;
    const maxProps: React.ReactNode = <MjmlDivider>child</MjmlDivider>;
}
// TestMjmlGroupTag
{
    const minProps: React.ReactNode = <MjmlGroup />;
    const maxProps: React.ReactNode = <MjmlGroup>child</MjmlGroup>;
}
// TestMjmlHeroTag
{
    const minProps: React.ReactNode = <MjmlHero />;
    const maxProps: React.ReactNode = <MjmlHero>child</MjmlHero>;
}
// TestMjmlImageTag
{
    const minProps: React.ReactNode = <MjmlImage />;
    const maxProps: React.ReactNode = <MjmlImage>child</MjmlImage>;
}
// TestMjmlNavbarTag
{
    const minProps: React.ReactNode = <MjmlNavbar />;
    const maxProps: React.ReactNode = <MjmlNavbar>child</MjmlNavbar>;
}
// TestMjmlNavbarLinkTag
{
    const minProps: React.ReactNode = <MjmlNavbarLink />;
    const maxProps: React.ReactNode = <MjmlNavbarLink>child</MjmlNavbarLink>;
}
// TestMjmlRawTag
{
    const minProps: React.ReactNode = <MjmlRaw />;
    const maxProps: React.ReactNode = <MjmlRaw>child</MjmlRaw>;
}
// TestMjmlSectionTag
{
    const minProps: React.ReactNode = <MjmlSection />;
    const maxProps: React.ReactNode = <MjmlSection>child</MjmlSection>;
}
// TestMjmlSpacerTag
{
    const minProps: React.ReactNode = <MjmlSpacer />;
    const maxProps: React.ReactNode = <MjmlSpacer>child</MjmlSpacer>;
}
// TestMjmlTableTag
{
    const minProps: React.ReactNode = <MjmlTable />;
    const maxProps: React.ReactNode = <MjmlTable>child</MjmlTable>;
    const roleProps: React.ReactNode = <MjmlTable role="presentation">child</MjmlTable>;
}
// TestMjmlTextTag
{
    const minProps: React.ReactNode = <MjmlText />;
    const maxProps: React.ReactNode = <MjmlText>child</MjmlText>;
}
// TestMjmlWrapperTag
{
    const minProps: React.ReactNode = <MjmlWrapper />;
    const maxProps: React.ReactNode = <MjmlWrapper>child</MjmlWrapper>;
}

// TestMjmlAccordionTag
{
    {
        const minProps: React.ReactNode = <MjmlAccordion />;
        const maxProps: React.ReactNode = (
            <MjmlAccordion
                border="0"
                containerBackgroundColor="#ffffff"
                fontFamily="Arial"
                iconAlign="left"
                iconHeight="20px"
                iconPosition="right"
                iconUnwrappedAlt="close"
                iconUnwrappedUrl="open.png"
                iconWidth="20px"
                iconWrappedAlt="open"
                iconWrappedUrl="close.png"
            >
                child
            </MjmlAccordion>
        );
    }
    // MjmlAccordionElement
    {
        const minProps: React.ReactNode = <MjmlAccordionElement />;
        const maxProps: React.ReactNode = (
            <MjmlAccordionElement
                border="0"
                backgroundColor="#ffffff"
                fontFamily="Arial"
                iconAlign="left"
                iconHeight="20px"
                iconPosition="right"
                iconUnwrappedAlt="close"
                iconUnwrappedUrl="open.png"
                iconWidth="20px"
                iconWrappedAlt="open"
                iconWrappedUrl="close.png"
            >
                child
            </MjmlAccordionElement>
        );
    }
    // TestMjmlAccordionTitleTag
    {
        const minProps: React.ReactNode = <MjmlAccordionTitle />;
        const maxProps: React.ReactNode = (
            <MjmlAccordionTitle backgroundColor="#ffffff" color="#000000" fontFamily="Arial" fontSize="20px">
                child
            </MjmlAccordionTitle>
        );
    }
    // MjmlAccordionText
    {
        const minProps: React.ReactNode = <MjmlAccordionText />;
        const maxProps: React.ReactNode = (
            <MjmlAccordionText
                backgroundColor="#ffffff"
                color="#000000"
                fontFamily="Arial"
                fontSize="20px"
                fontWeight="5"
                letterSpacing="1.5"
                lineHeight="2"
            >
                child
            </MjmlAccordionText>
        );
    }
}
// TestMjmlCarouselTag
{
    // MjmlCarousel
    {
        const minProps: React.ReactNode = <MjmlCarousel />;
        const maxProps: React.ReactNode = <MjmlCarousel>child</MjmlCarousel>;
    }
    // MjmlCarouselImage
    {
        const minProps: React.ReactNode = <MjmlCarouselImage />;
        const maxProps: React.ReactNode = <MjmlCarouselImage>child</MjmlCarouselImage>;
    }
}
// TestMjmlSocialElementTag
{
    {
        const minProps: React.ReactNode = <MjmlSocialElement />;
        const maxProps: React.ReactNode = <MjmlSocialElement>child</MjmlSocialElement>;
        const iconPadProps: React.ReactNode = <MjmlSocialElement iconPadding="5px">child</MjmlSocialElement>;
    }
    // MjmlSocial
    {
        const minProps: React.ReactNode = <MjmlSocial />;
        const maxProps: React.ReactNode = <MjmlSocial cssClass="">child</MjmlSocial>;
    }
}
