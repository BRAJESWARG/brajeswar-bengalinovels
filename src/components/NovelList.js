// src/components/NovelList.js
import React from 'react';
import '../styles/NovelList.css';

const novels = [
  { title: 'কপালকুণ্ডলা', file: 'কপালকুণ্ডলা.pdf' },
  { title: 'কুহেলিকা', file: 'কুহেলিকা.pdf' },
  { title: 'শকুন্তলা', file: 'শকুন্তলা.pdf' },
  { title: 'দেবদাস', file: 'দেবদাস.pdf' },
  { title: 'পরিণীতা', file: 'পরিণীতা.pdf' },
  { title: 'শ্রীকান্ত', file: 'শ্রীকান্ত.pdf' },
];

const NovelList = ({ name }) => {
  const openPDF = (file) => {
    window.open(require(`../assets/${file}`), '_blank');
  };

  return (
    <div className="novel-list-container">
      <h2>Hey! {name}</h2>
      <h3>Turning Pages, Stealing Hearts -Happy Reading!</h3>
      <ul className="novel-list">
        {novels.map((novel, index) => (
          <li key={index} onClick={() => openPDF(novel.file)} className="novel-item">
            {novel.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NovelList;