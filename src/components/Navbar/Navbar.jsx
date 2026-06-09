import React from 'react';
import { useTranslation } from 'react-i18next';
import { navigationItems } from '../../data/navigationData.js';
import LanguageSwitcher from './LanguageSwitcher.jsx';

export const Navbar = ({ 
  activeTab, 
  setActiveTab, 
  setSelectedProduct, 
  theme, 
  toggleTheme, 
  setCategoryFilter 
}) => {
  const { t } = useTranslation();

  return (
    <header className="NavbarHeader">
      <div 
        className="LogoBranding" 
        onClick={() => { 
          setSelectedProduct(null); 
          setActiveTab('HOME'); 
          window.scrollTo({ top: 0, behavior: 'smooth' }); 
        }}
      >
        <div className="LogoBrandText" id="logo-id">
          {t('hero.kemet_watermark', 'KEMET')}
        </div>
        <div className="LogoSubTagline">
          <a 
            href="https://www.dxbalpha.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={(e) => e.stopPropagation()}
          >
            by alpha gino
          </a>
        </div>
      </div>
      
      <nav>
        <ul className="NavigationList">
          {navigationItems.map((item) => {
            const key = item.label === 'About Us' ? 'about' : item.label.toLowerCase();
            return (
              <li key={item.id}>
                <a 
                  href={item.href} 
                  className={`NavigationAnchor ${activeTab === item.tab ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedProduct(null);
                    setActiveTab(item.tab);
                    if (item.tab === 'CATALOG' && setCategoryFilter) {
                      setCategoryFilter('ALL');
                    }
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  id={item.id}
                >
                  {t(`nav.${key}`, item.label)}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="HeaderActions">
        <LanguageSwitcher />

        <button 
          className="ThemeSwitcher" 
          onClick={toggleTheme} 
          aria-label="Toggle Light/Dark Theme"
          id="btn-theme-toggle"
        >
          {theme === 'dark' ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="ThemeVectorIcon">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="ThemeVectorIcon">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          )}
        </button>
        <button 
          className="ButtonPrimary NavQuoteButton" 
          id="btn-get-quote-nav"
          aria-label={t('nav.request_quote')}
          onClick={() => {
            setSelectedProduct(null);
            setActiveTab('HOME');
            setTimeout(() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
        >
          <span className="NavQuoteLabelFull">{t('nav.request_quote')}</span>
          <span className="NavQuoteLabelShort">{t('nav.request_quote_short')}</span>
          <span className="NavQuoteArrow" aria-hidden="true">&rarr;</span>
          <svg className="NavQuoteIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
