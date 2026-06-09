import React from 'react';
import { useTranslation } from 'react-i18next';
import Slideshow from '../../components/Card/Slideshow.jsx';

export const CategoryShowcase = () => {
  const { t } = useTranslation();

  const handleScrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="FleetShowcaseSection" id="products">
      <div className="ShowcaseGridContainer">
        <div className="ShowcaseSectionHeader">
          <div className="HeaderGroupingLeft">
            <div className="SectionSegmentPill">
              <span className="PillAccentLine"></span>
              <span className="PillLabelText">{t('showcase.badge')}</span>
            </div>
            <h2 className="ShowcaseSectionTitle">
              {t('showcase.title_line1')}<br />
              {t('showcase.title_line2')}
            </h2>
          </div>
          <div className="HeaderGroupingRight">
            <button 
              className="ShowAllCategoriesButton" 
              onClick={handleScrollToContact}
              id="btn-all-categories"
            >
              {t('showcase.all_btn')} <span>&rarr;</span>
            </button>
          </div>
        </div>

        <div className="ShowcaseGridLayout">
          <div className="FleetCategoryCard" id="card-excavators">
            <div className="CardMediaViewport">
              <span className="StockStatusBadge">🟢 {t('showcase.available')}</span>
              <Slideshow images={['/excavator.png', '/58b02da8-096c-4b50-a14f-052b62df8d9d.png', '/549f62ea-492c-4b77-80e1-baba3f682a09.png']} />
            </div>
            <div className="CardSpecificationContent">
              <h3 className="CardVehicleHeading">{t('showcase.excavators_title')}</h3>
              <p className="CardVehicleSummary">
                {t('showcase.excavators_desc')}
              </p>
              <button 
                className="CardActionAnchor" 
                onClick={handleScrollToContact}
                id="btn-view-excavators"
              >
                {t('showcase.view_range')}
              </button>
            </div>
          </div>

          <div className="FleetCategoryCard" id="card-loaders">
            <div className="CardMediaViewport">
              <span className="StockStatusBadge">🟢 {t('showcase.available')}</span>
              <Slideshow images={['/loader.png', '/kl950-loader.jpg', '/kb880-backhoe.jpg']} />
            </div>
            <div className="CardSpecificationContent">
              <h3 className="CardVehicleHeading">{t('showcase.loaders_title')}</h3>
              <p className="CardVehicleSummary">
                {t('showcase.loaders_desc')}
              </p>
              <button 
                className="CardActionAnchor" 
                onClick={handleScrollToContact}
                id="btn-view-loaders"
              >
                {t('showcase.view_range')}
              </button>
            </div>
          </div>

          <div className="FleetCategoryCard" id="card-tractors">
            <div className="CardMediaViewport">
              <span className="StockStatusBadge">🟢 {t('showcase.available')}</span>
              <Slideshow images={['/tractor.png', '/ar-tractor-1.jpg', '/ar-tractor-2.jpg']} />
            </div>
            <div className="CardSpecificationContent">
              <h3 className="CardVehicleHeading">{t('showcase.tractors_title')}</h3>
              <p className="CardVehicleSummary">
                {t('showcase.tractors_desc')}
              </p>
              <button 
                className="CardActionAnchor" 
                onClick={handleScrollToContact}
                id="btn-view-tractors"
              >
                {t('showcase.view_range')}
              </button>
            </div>
          </div>

          <div className="FleetCategoryCard" id="card-trucks">
            <div className="CardMediaViewport">
              <span className="StockStatusBadge">🟢 {t('showcase.available')}</span>
              <Slideshow images={['/truck.png', '/km450-truck.jpg', '/ar-tractor-3.jpg']} />
            </div>
            <div className="CardSpecificationContent">
              <h3 className="CardVehicleHeading">{t('showcase.trucks_title')}</h3>
              <p className="CardVehicleSummary">
                {t('showcase.trucks_desc')}
              </p>
              <button 
                className="CardActionAnchor" 
                onClick={handleScrollToContact}
                id="btn-view-trucks"
              >
                {t('showcase.view_range')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
