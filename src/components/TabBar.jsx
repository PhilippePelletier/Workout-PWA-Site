import PropTypes from 'prop-types';
import './TabBar.css';

const tabs = [
  { id: 'program', label: 'Program', icon: '📋' },
  { id: 'log', label: 'Training Log', icon: '📝' },
  { id: 'progress', label: 'Progress', icon: '📈' },
  { id: 'help', label: 'Help', icon: '❓' }
];

export function TabBar({ activeTab, onChange }) {
  return (
    <nav className="tabbar" role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab ${activeTab === tab.id ? 'active' : ''}`}
          role="tab"
          aria-selected={activeTab === tab.id}
          onClick={() => onChange(tab.id)}
        >
          <span className="ico" aria-hidden="true">
            {tab.icon}
          </span>
          <span className="lbl">{tab.label}</span>
        </button>
      ))}
    </nav>
  );
}

TabBar.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
