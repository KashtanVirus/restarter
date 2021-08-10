export const PATH = {
  HOME: `/`,
  LOGIN: `/login`,
  SIGNUP: `/signup`,
  RULES: `/rules`,
  ABOUT: `/about`,
  CONTAINERS: `/containers`,
}

export const containerStatuses = [
  {
    value: 1,
    label: `Ожидает подключения`,
  },
  {
    value: 2,
    label: `Активный`,
  },
  {
    value: 3,
    label: `Неактивный`,
  },
]

export const containerTypes = [
  {
    value: 1,
    label: `Экобокс`,
  },
  {
    value: 2,
    label: `Офисная урна`,
  },
  {
    value: 3,
    label: `Коробка из-под бумаги`,
  },
]
