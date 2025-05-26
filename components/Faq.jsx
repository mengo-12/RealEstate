import React from 'react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "ما هو هذا الموقع؟",
        answer: "هذا الموقع يقدم خدمات عقارية لعرض وشراء وبيع العقارات بسهولة."
    },
    {
        question: "كيف يمكنني إضافة عقار؟",
        answer: "سجّل حسابًا ثم استخدم لوحة التحكم لإضافة عقارك بكل سهولة."
    },
    {
        question: "هل توجد رسوم على النشر؟",
        answer: "نعم، هناك باقات مجانية ومدفوعة حسب المميزات المطلوبة."
    }
];


function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-2xl mx-auto my-10 p-5 bg-white rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold text-black text-center mb-6">Faq</h2>
            {faqs.map((faq, index) => (
                <div key={index} className="border-b py-4">
                    <button
                        className="w-full flex justify-between items-center text-right"
                        onClick={() => toggle(index)}
                    >
                        <span className="text-lg font-medium text-black">{faq.question}</span>
                        <ChevronDown
                            className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                }`}
                        />
                    </button>
                    {openIndex === index && (
                        <p className="mt-3 text-gray-700 text-sm">{faq.answer}</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Faq;