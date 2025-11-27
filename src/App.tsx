import { Button } from '@alfalab/core-components/button/cssm';
import { Collapse } from '@alfalab/core-components/collapse/cssm';
import { Divider } from '@alfalab/core-components/divider/cssm';
import { Gap } from '@alfalab/core-components/gap/cssm';
import { PureCell } from '@alfalab/core-components/pure-cell/cssm';
import { Slider } from '@alfalab/core-components/slider/cssm';
import { Steps } from '@alfalab/core-components/steps/cssm';
import { Typography } from '@alfalab/core-components/typography/cssm';
import { ChevronDownMIcon } from '@alfalab/icons-glyph/ChevronDownMIcon';
import { ChevronUpMIcon } from '@alfalab/icons-glyph/ChevronUpMIcon';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import fileImg from './assets/file.png';
import hb from './assets/hb.png';
import houseImg from './assets/house.png';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';
import img5 from './assets/img5.png';
import img6 from './assets/img6.png';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';
import { formatWord } from './utils/words';

const SLIDER_SUM = {
  default: 500_000,
  min: 2_000,
  max: 10_000_000,
  step: 1_000,
};

const PERCENT = 0.19;
const faqs = [
  {
    question: 'Есть ли налог?',
    answer: ['Налог начисляется на доход'],
  },
  {
    question: 'Можно ли вывести деньги до конца срока?',
    answer: ['Только в определенных случаях, зафиксированных в условиях программы долгосрочного сбережения'],
  },
  {
    question: 'Какую сумму нужно внести при оформлении договора?',
    answer: ['Первый и последующие взносы — от 2 000 ₽.'],
  },
  {
    question: 'Как получить до 360 000 ₽ от государства?',
    answer: [
      'Господдержка предоставляется в течение 10 лет после внесения первого взноса, если сумма взносов за год не меньше 2 000 ₽. Сумма господдержки зависит от размера ваших взносов и ежемесячного дохода, но не превышает 36 000 ₽ в год.',
    ],
  },
  {
    question: 'Когда выплачиваются накопления?',
    answer: ['Через 15 лет или по достижении возраста 55 лет для женщин и 60 лет для мужчин.'],
  },
];

const advantages = [
  {
    title: 'До 360 000 ₽',
    description: 'Добавит государство после вступления в программу',
    img: houseImg,
  },
  {
    title: 'До 1 320 000 ₽',
    description: 'Можно получить за счёт налогового вычета',
    img: fileImg,
  },
];

const targets = [
  {
    title: 'Получать пассивный доход от накоплений',
    img: img1,
  },
  {
    title: 'Накопить на образование детей',
    img: img2,
  },
  {
    title: 'Выйти на пенсию досрочно',
    img: img3,
  },
  {
    title: 'Больше путешествовать',
    img: img4,
  },
  {
    title: 'Купить дом и жить у моря на пенсии',
    img: img5,
  },
  {
    title: 'Создать начальный капитал для детей',
    img: img6,
  },
];

const LINK =
  'alfabank://multistep-route?fromModule=FORM&version=2&stepNumber=0&alias=risk-notification-signer&prefilledDataID=1001&productType=NPF';

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [sliderSum, setSliderSum] = useState(SLIDER_SUM.default);
  const [sliderTerm, setSliderTerm] = useState(15);
  const [collapsedItems, setCollapsedItem] = useState<string[]>([]);

  useEffect(() => {
    if (!LS.getItem(LSKeys.UserId, null)) {
      LS.setItem(LSKeys.UserId, Date.now());
    }
  }, []);

  const incomeProfitWithSum = Math.floor(((sliderSum * PERCENT) / 12) * (sliderTerm * 12));

  const submit = () => {
    window.gtag('event', '6624_card_activate', { var: 'var5' });
    setLoading(true);

    // sendDataToGA({
    //   autopayments: Number(checked) as 1 | 0,
    //   limit: Number(checked2) as 1 | 0,
    //   limit_sum: limit ?? 0,
    //   insurance: Number(checked3) as 1 | 0,
    //   email: email ? 1 : 0,
    // }).then(() => {
    //   LS.setItem(LSKeys.ShowThx, true);
    //   setThx(true);
    //   setLoading(false);
    // });
    LS.setItem(LSKeys.ShowThx, true);
    window.location.replace(LINK);
    setLoading(false);
  };

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.box}>
          <Typography.TitleResponsive tag="h1" view="large" font="system" weight="semibold">
            Программа долгосрочных сбережений
          </Typography.TitleResponsive>
          <Typography.Text view="primary-small" color="secondary">
            Откладывайте с выгодой: получите процент на вклад, поддержку от государства и налоговый вычет
          </Typography.Text>

          <img src={hb} alt="hb" width="100%" height={133} style={{ objectFit: 'contain' }} />
        </div>

        <Typography.TitleResponsive style={{ marginTop: '12px' }} tag="h3" view="small" font="system" weight="semibold">
          Преимущества
        </Typography.TitleResponsive>

        {advantages.map((adv, index) => (
          <PureCell key={index}>
            <PureCell.Graphics verticalAlign="center">
              <img src={adv.img} width={48} height={48} alt="house" />
            </PureCell.Graphics>
            <PureCell.Content>
              <PureCell.Main>
                <Typography.TitleResponsive tag="h4" view="xsmall" font="system" weight="semibold">
                  {adv.title}
                </Typography.TitleResponsive>

                <Typography.Text view="primary-small" color="secondary">
                  {adv.description}
                </Typography.Text>
              </PureCell.Main>
            </PureCell.Content>
          </PureCell>
        ))}

        <Typography.TitleResponsive style={{ marginTop: '12px' }} tag="h3" view="small" font="system" weight="semibold">
          Сравните
        </Typography.TitleResponsive>

        <div className={appSt.boxTable}>
          <div className={appSt.boxTableCell()}>
            <Typography.Text view="primary-small" weight="bold" style={{ marginBottom: '12px' }}>
              Депозит
            </Typography.Text>
            <Typography.Text view="secondary-medium">До 16% годовых</Typography.Text>
            <Divider />
            <Typography.Text style={{ height: 32 }} view="secondary-medium">
              Фиксированная ставка
            </Typography.Text>
            <Divider />
            <Typography.Text view="secondary-medium">Нет налогового вычета</Typography.Text>
          </div>
          <div className={appSt.boxTableCell({ filled: true })}>
            <Typography.Text view="primary-small" weight="bold" style={{ marginBottom: '12px' }}>
              Стратегии
            </Typography.Text>
            <Typography.Text view="secondary-medium">До 27% годовых</Typography.Text>
            <Divider />
            <Typography.Text style={{ height: 32 }} view="secondary-medium">
              Софинансирование государства
            </Typography.Text>
            <Divider />
            <Typography.Text view="secondary-medium">Налоговый вычет до 88 000 ₽ в год</Typography.Text>
          </div>
        </div>

        <Typography.TitleResponsive style={{ marginTop: '12px' }} tag="h3" view="small" font="system" weight="semibold">
          Для каких целей
        </Typography.TitleResponsive>

        <div>
          <Swiper style={{ marginLeft: '0' }} spaceBetween={12} slidesPerView="auto">
            {targets.map((target, index) => (
              <SwiperSlide className={appSt.sliderContainer} key={index}>
                <div className={appSt.sliderBox}>
                  <img src={target.img} width="100%" height={112} style={{ marginTop: '-60px' }} alt={target.title} />
                  <Typography.Text view="primary-small" weight="bold" style={{ maxWidth: '180px' }}>
                    {target.title}
                  </Typography.Text>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Typography.TitleResponsive style={{ marginTop: '12px' }} tag="h3" view="small" font="system" weight="semibold">
          Как это работает
        </Typography.TitleResponsive>

        <Steps isVerticalAlign={true} interactive={false} className={appSt.stepStyle}>
          <span>
            <Typography.Text tag="p" defaultMargins={false} view="component-primary">
              Вносите от 2000 ₽ год
            </Typography.Text>
            <Typography.Text view="primary-small" color="secondary">
              Для удобства можно подключить автоплатёж
            </Typography.Text>
          </span>
          <span>
            <Typography.Text tag="p" defaultMargins={false} view="component-primary">
              Государство добавляет до 36 000 ₽ в год и возвращает налоговый вычет до 88 000 ₽
            </Typography.Text>
            <Typography.Text view="primary-small" color="secondary">
              Гос.поддержку можно получать до 10 лет, а налоговый вычет — минимум 15 лет
            </Typography.Text>
          </span>
          <span>
            <Typography.Text tag="p" defaultMargins={false} view="component-primary">
              Фонд инвестирует деньги и начисляет доход ежегодно
            </Typography.Text>
            <Typography.Text view="primary-small" color="link">
              Посмотреть доходы за 2024 год
            </Typography.Text>
          </span>
        </Steps>

        <Typography.TitleResponsive style={{ marginTop: '12px' }} tag="h3" view="small" font="system" weight="semibold">
          Расчитайте доход
        </Typography.TitleResponsive>

        <div className={appSt.boxCalc}>
          <div>
            <div className={appSt.rowSb}>
              <Typography.Text view="primary-medium" color="secondary">
                Сумма инвестиций
              </Typography.Text>
              <Typography.Text view="primary-medium" weight="medium">
                {sliderSum.toLocaleString('ru')} ₽
              </Typography.Text>
            </div>
            <div style={{ marginTop: '12px' }}>
              <Slider
                size={4}
                value={sliderSum}
                step={SLIDER_SUM.step}
                min={SLIDER_SUM.min}
                max={SLIDER_SUM.max}
                onChange={({ value }) => setSliderSum(value)}
              />
            </div>
          </div>

          <div>
            <div className={appSt.rowSb}>
              <Typography.Text view="primary-medium" color="secondary">
                Срок
              </Typography.Text>
              <Typography.Text view="primary-medium" weight="medium">
                {formatWord(sliderTerm, ['год', 'года', 'лет'])}
              </Typography.Text>
            </div>
            <div style={{ marginTop: '12px' }}>
              <Slider
                size={4}
                value={sliderTerm}
                min={15}
                max={30}
                step={1}
                onChange={({ value }) => setSliderTerm(value)}
              />
            </div>
          </div>

          <div className={appSt.rowSb}>
            <Typography.Text view="primary-medium" color="secondary">
              Потенциальный доход
            </Typography.Text>
            <Typography.Text view="primary-medium" weight="medium">
              {incomeProfitWithSum.toLocaleString('ru')} ₽
            </Typography.Text>
          </div>
        </div>

        <Typography.Text view="secondary-large" color="secondary">
          Расчёт дохода примерный, деньги можно снять в любой момент
        </Typography.Text>

        <Typography.TitleResponsive style={{ marginTop: '12px' }} tag="h3" view="small" font="system" weight="semibold">
          Дополнительные вопросы
        </Typography.TitleResponsive>

        {faqs.map((faq, index) => (
          <div key={index}>
            <div
              onClick={() => {
                window.gtag('event', '6624_card_faq', { faq: String(index + 1), var: 'var5' });

                setCollapsedItem(items =>
                  items.includes(String(index + 1))
                    ? items.filter(item => item !== String(index + 1))
                    : [...items, String(index + 1)],
                );
              }}
              className={appSt.rowSb}
            >
              <Typography.Text view="primary-medium" weight="medium">
                {faq.question}
              </Typography.Text>
              {collapsedItems.includes(String(index + 1)) ? (
                <div style={{ flexShrink: 0 }}>
                  <ChevronUpMIcon />
                </div>
              ) : (
                <div style={{ flexShrink: 0 }}>
                  <ChevronDownMIcon />
                </div>
              )}
            </div>
            <Collapse expanded={collapsedItems.includes(String(index + 1))}>
              {faq.answer.map((answerPart, answerIndex) => (
                <Typography.Text key={answerIndex} tag="p" defaultMargins={false} view="primary-medium">
                  {answerPart}
                </Typography.Text>
              ))}
            </Collapse>
          </div>
        ))}
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <Button loading={loading} block view="primary" onClick={submit}>
          Открыть счет
        </Button>
      </div>
    </>
  );
};
