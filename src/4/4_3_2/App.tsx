// 4_3_2 Focus a field conditionally
/*
  Эта форма отображает два компонента <MyInput />.

  Нажмите "Показать форму" и обратите внимание, что второе поле автоматически фокусируется. Это происходит потому, что оба компонента <MyInput /> пытаются сфокусировать поле внутри. Когда вы вызываете focus() для двух полей ввода подряд, последнее всегда "побеждает".

  Допустим, вы хотите сфокусировать первое поле. Первый компонент MyInput теперь получает булево свойство shouldFocus, установленное в true. Измените логику так, чтобы focus() вызывалась только в том случае, если пропс shouldFocus, полученный MyInput, равен true.
*/

import { useEffect, useRef } from 'react';

interface MyInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  shouldFocus?: boolean;
}

export default function MyInput({ value, onChange, shouldFocus }: MyInputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (shouldFocus) {
      inputRef.current?.focus();
    }
  }, [shouldFocus]);

  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      onChange={onChange}
    />
  );
}