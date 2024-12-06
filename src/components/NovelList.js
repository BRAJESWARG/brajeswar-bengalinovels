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

const NovelList = ({ name, onOpenPdf }) => {
  return (
    <div className="novel-list-container">
      <h2 className="name">Hey, {name}!</h2>
      <h3 className="Turning">Turning Pages, Stealing Hearts - Happy Reading!</h3>
      <ul className="novel-list">
        {novels.map(({ title, file }, index) => (
          <li
            key={index}
            onClick={() => onOpenPdf(file)}
            className="novel-item"
            role="button"
            tabIndex={0}
          >
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NovelList;