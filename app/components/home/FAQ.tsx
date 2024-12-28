'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What technologies do you use?',
    answer: 'We use modern technologies including Next.js, TypeScript, and Tailwind CSS to build scalable and maintainable applications.',
  },
  {
    question: 'How do you ensure quality?',
    answer: 'We follow best practices, use automated testing, and perform thorough code reviews to maintain high quality standards.',
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'We offer comprehensive support including documentation, email support, and priority assistance for enterprise customers.',
  },
  {
    question: 'Can I upgrade my plan later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
  },
];

export default function FAQ() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">FAQ</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently asked questions
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}