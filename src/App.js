import { BrowserRouter } from 'react-router-dom';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';
import { DefaultLayout } from './components/templates/DefaultLayout';
import { HeaderOnly } from './components/templates/HeaderOnly';
import './styles.css';

const user = {
  name: 'パンチ',
  image: 'https://source.unsplash.com/photos/eoqnr8ikwFE',
  email: '123456@test.com',
  phone: '000-111-222',
  company: {
    name: '株式会社テスト'
  },
  website: 'https://google.com'
};

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
