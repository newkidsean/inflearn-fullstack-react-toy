import { useRef } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import './index.scss';

const App = ({ Component, pageProps }) => {
  // queryClient 가 app 이 실행될 때마다 매번 만들어 지는 것을 막기 위해 useRef 를 사용 함
  const clientRef = useRef(null);
  const getClient = () => {
    if (!clientRef.current) clientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          // 창이 포커스 될 때마다 리패치 될지 설정하는 옵션
          refetchOnWindowFocus: false,
        }
      }
    });
    return clientRef.current
  }
  // const queryClient = new QueryClient();

  return (
    // <QueryClientProvider client={queryClient}>
    <QueryClientProvider client={getClient()}>
      {/* hydration 을 위한 세팅. 여기서는 SSR이기 때문에 처음에 서버에서 날아온 정보부터 캐시에 저정한다 */}
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
};
App.getInitialProps = async ({ ctx, Component }) => {
  const pageProps = await Component.getInitialProps?.(ctx)
  return { pageProps }
}

export default App;
