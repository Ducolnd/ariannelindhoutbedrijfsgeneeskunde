import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: 'white' | 'gray' | 'cream' | 'medical-light' | 'medical-50';
}

export function Section({ children, className = '', id, bg = 'white' }: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-slate-50',
    cream: 'bg-cream',
    'medical-light': 'bg-medical-light',
    'medical-50': 'bg-medical-50',
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgClasses[bg]} ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
