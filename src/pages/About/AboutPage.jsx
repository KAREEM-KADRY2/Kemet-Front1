import React from 'react';
import { useTranslation } from 'react-i18next';

export const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <section className="CompanyHistorySection" id="about" style={{ paddingTop: '140px' }}>
      <div className="AboutBannerFrame">
        <div className="AboutBannerAsset" style={{ backgroundImage: "url('/about-mining.png')" }}></div>
        <div className="AboutBannerVignette"></div>
        <div className="AboutBannerDetails">
          <div className="AboutBannerSegmentBadge">
            <span className="BadgeAccentLine"></span>
            <span className="BadgeLabelText">{t('about.badge')}</span>
            <span className="BadgeAccentLine"></span>
          </div>
          <h1 className="AboutBannerMainHeadline">{t('about.heading')}</h1>
          <p className="AboutBannerSubHeadline">
            {t('about.subheading')}
          </p>
        </div>
      </div>

      <div className="AboutDetailsSectionWrapper">
        <div className="AboutDetailsGridLayout">
          <div className="AboutHistoryStoryPanel">
            <div className="AboutSectionSubheading">
              <span className="SubheadingAccentLine"></span>
              <span className="SubheadingLabel">{t('about.history_badge')}</span>
            </div>
            <h2 className="AboutHistoryHeadline">{t('about.history_heading_1')}<br /><span>{t('about.history_heading_2')}</span></h2>
            
            <p className="AboutHistoryParagraph lead-paragraph">
              {t('about.history_p1')}
            </p>
            <p className="AboutHistoryParagraph">
              {t('about.history_p2')}
            </p>
            <p className="AboutHistoryParagraph">
              {t('about.history_p3')}
            </p>
          </div>

          <div className="AboutHighlightsGridColumn">
            <div className="AboutHighlightsPanel">
              <h3 className="highlights-card-title">{t('about.strengths_title')}</h3>
              
              <div className="AboutHighlightIndicatorTile">
                <div className="highlight-num">20+</div>
                <div className="highlight-text">
                  <span className="highlight-title">{t('about.strength_1_title')}</span>
                  <span className="highlight-desc">{t('about.strength_1_desc')}</span>
                </div>
              </div>

              <div className="AboutHighlightIndicatorTile">
                <div className="highlight-num">100%</div>
                <div className="highlight-text">
                  <span className="highlight-title">{t('about.strength_2_title')}</span>
                  <span className="highlight-desc">{t('about.strength_2_desc')}</span>
                </div>
              </div>

              <div className="AboutHighlightIndicatorTile">
                <div className="highlight-num">24/7</div>
                <div className="highlight-text">
                  <span className="highlight-title">{t('about.strength_3_title')}</span>
                  <span className="highlight-desc">{t('about.strength_3_desc')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
