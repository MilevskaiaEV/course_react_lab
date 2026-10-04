// 4_2_2 Focus the search field
/*
  Сделайте так, чтобы нажатие на кнопку "Поиск" наводило фокус на поле.
*/

import { useRef } from 'react';

export default function Page() {
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const handleSearchClick = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <>
      <nav>
        <button onClick={handleSearchClick}>Search</button>
      </nav>
      <input
        ref={searchInputRef}
        placeholder="Looking for something?"
      />
    </>
  );
}