import React from 'react';
import { useTranslation } from 'react-i18next';

export const BrandAdvantages = () => {
  const { t } = useTranslation();

  return (
    <section className="BrandAdvantagesSection" id="why-kemet">
      <div className="AdvantagesLayoutContainer">
        <div className="AdvantagesHeaderBlock">
          <div className="AdvantagesSegmentBadge">
            <span className="PillAccentLine"></span>
            <span className="PillLabelText">{t('advantages.badge')}</span>
            <span className="PillAccentLine"></span>
          </div>
          <h2 className="AdvantagesMainHeading">{t('advantages.heading')}</h2>
        </div>

        <div className="AdvantagesGridLayout">
          <div className="AdvantageDetailsCard" id="why-card-power">
            <div className="AdvantageVectorFrame">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="AdvantageVector">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            <h3 className="AdvantageCardHeading">{t('advantages.power_title')}</h3>
            <p className="AdvantageCardSummary">
              {t('advantages.power_desc')}
            </p>
          </div>

          <div className="AdvantageDetailsCard active" id="why-card-precision">
            <div className="AdvantageVectorFrame">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="AdvantageVector">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="22" y1="12" x2="18" y2="12"></line>
                <line x1="6" y1="12" x2="2" y2="12"></line>
                <line x1="12" y1="6" x2="12" y2="2"></line>
                <line x1="12" y1="22" x2="12" y2="18"></line>
              </svg>
            </div>
            <h3 className="AdvantageCardHeading">{t('advantages.precision_title')}</h3>
            <p className="AdvantageCardSummary">
              {t('advantages.precision_desc')}
            </p>
          </div>

          <div className="AdvantageDetailsCard" id="why-card-reliability">
            <div className="AdvantageVectorFrame">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="AdvantageVector">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="AdvantageCardHeading">{t('advantages.reliability_title')}</h3>
            <p className="AdvantageCardSummary">
              {t('advantages.reliability_desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandAdvantages;
