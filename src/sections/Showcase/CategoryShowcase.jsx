import React from 'react';
import { useTranslation } from 'react-i18next';

export const CategoryShowcase = ({ setActiveTab, setCategoryFilter }) => {
  const { t } = useTranslation();
  
  const mainSections = [
    {
      id: 'kemet-wheel-loaders',
      name: 'KEMET Wheel Loaders',
      description: 'Explore our premium range of KEMET wheel loaders, engineered for maximum power and endurance in tough environments.',
      image: '/catalog-new.jpg' // Using a generic banner image since specific ones aren't provided yet
    },
    {
      id: 'agricm-product-catalog',
      name: 'AGRICM Product Catalog',
      description: 'Discover the full AGRICM product catalog, featuring specialized machinery and equipment.',
      image: '/catalog-new.jpg' // Using a generic banner image
    }
  ];

  const handleViewCategory = (e, categoryName) => {
    e.preventDefault();
    if (setActiveTab) setActiveTab('CATALOG');
    if (setCategoryFilter) setCategoryFilter(categoryName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="FleetShowcaseSection" id="products">
      <div className="ShowcaseGridContainer">
        <div className="ShowcaseSectionHeader">
          <div className="HeaderGroupingLeft">
            <div className="SectionSegmentPill">
              <span className="PillAccentLine"></span>
              <span className="PillLabelText">{t('showcase.badge', 'BROWSE BY TYPE')}</span>
            </div>
            <h2 className="ShowcaseSectionTitle">
              {t('showcase.title_line1', 'EXPLORE OUR')}<br />
              {t('showcase.title_line2', 'MAIN DIVISIONS')}
            </h2>
          </div>
          <div className="HeaderGroupingRight">
            <button 
              className="ShowAllCategoriesButton" 
              onClick={(e) => handleViewCategory(e, 'ALL')}
              id="btn-all-categories"
            >
              {t('showcase.all_btn', 'ALL CATEGORIES')} <span>&rarr;</span>
            </button>
          </div>
        </div>

        <div className="ShowcaseGridLayout" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {mainSections.map(section => (
            <div className="FleetCategoryCard" id={`card-${section.id}`} key={section.id}>
              <div className="CardMediaViewport" style={{ height: '250px', backgroundColor: '#eaeaea' }}>
                <img src={section.image} alt={section.name} className="CardVehicleAsset" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <div className="CardSpecificationContent">
                <h3 className="CardVehicleHeading">{section.name}</h3>
                <p className="CardVehicleSummary">
                  {section.description}
                </p>
                <button 
                  className="CardActionAnchor" 
                  onClick={(e) => handleViewCategory(e, section.name)}
                  id={`btn-view-${section.id}`}
                  style={{ marginTop: 'auto' }}
                >
                  {t('showcase.view_range', 'VIEW CATALOG')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
