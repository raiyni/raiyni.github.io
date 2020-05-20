var tasks = [
  {
    plans: [
      [
        {
          start: '2020-05-19T05:00:00.000Z',
          end: '2020-05-26T05:00:00.000Z',
          progress: 18,
          height: 22,
          style: {
            fill: '#f2c329'
          }
        }
      ],
      [
        {
          start: '2020-05-21T05:00:00.000Z',
          end: '2020-06-26T05:00:00.000Z',
          progress: 100,
          height: 22,
          style: {
            fill: '#8fdaff',
            stroke: 'black',
            strokeWidth: '1px'
          }
        }
      ],
      [
        {
          start: '2020-05-22T05:00:00.000Z',
          end: '2020-06-20T05:00:00.000Z',
          progress: 100,
          height: 22,
          style: {
            fill: '#8fdaff',
            stroke: 'black',
            strokeWidth: '1px'
          }
        }
      ],
      [
        {
          start: '2020-05-02T05:00:00.000Z',
          end: '2020-06-02T05:00:00.000Z',
          progress: 100,
          height: 22,
          style: {
            fill: '#8fdaff',
            stroke: 'black',
            strokeWidth: '1px'
          }
        }
      ]
    ],
    name: 'Redesign website',
    id: 'Task 0',
    pieces: 200,
    area: '2k',
    milestones: [
      [
        {
          date: '2020-05-7',
          href: 'https://image.flaticon.com/icons/svg/67/67354.svg'
        },
        {
          date: '2020-05-13',
          href:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/512px-Star_icon_stylized.svg.png'
        }
      ]
    ]
  },
  {
    plans: [
      [
        {
          start: '2020-05-20T05:00:00.000Z',
          end: '2020-05-23T05:00:00.000Z',
          progress: 10,
          height: 50,
          style: {
            fill: '#f2c329'
          }
        },
        {
          start: '2020-05-15T05:00:00.000Z',
          end: '2020-05-18T05:00:00.000Z',
          height: 20,
          style: {
            fill: '#f2c329'
          }
        }
      ],
      [
        {
          start: '2020-05-15T05:00:00.000Z',
          end: '2020-05-18T05:00:00.000Z',
          height: 30,
          style: {
            fill: '#68de84'
          }
        },
        {
          start: '2020-05-21T05:00:00.000Z',
          end: '2020-06-18T05:00:00.000Z',
          height: 30,
          style: {
            fill: '#8fdaff'
          }
        }
      ]
    ],
    name: 'Write new content',
    id: 'Task 1',
    pieces: 444,
    area: '22k',
    milestones: [
      [],
      [
        {
          date: '2020-05-15',
          width: 32,
          href:
            'https://lh3.googleusercontent.com/proxy/HrXl9HSIeI_YZODEC09H_YHi9VcLT69nTfVoIUFHCiF578n7FrrvRi40Toggq5cEUcDaC2chmADXnqPqIRJfsEFh7CV6yHXj7-N9QURwoebXPY4Fg1fJpDWoyshfHbz5VH8tTYvqzzUxXZNZaI4veAIAU-OqVX32Zw'
        }
      ]
    ]
  },
  {
    plan: {
      start: '2020-05-22T05:00:00.000Z',
      end: '2020-05-25T05:00:00.000Z',
      progress: 87,
      height: 10,
      style: {
        fill: '#f2c329'
      }
    },
    name: 'Apply new styles',
    id: 'Task 2',
    pieces: 44,
    area: '232k',
    milestones: [
      {
        date: '2020-05-23T05:00:00.000Z',
        href: 'https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png'
      }
    ]
  }
]

var gantt_chart = new Timeline('#abc123', tasks, {
  viewMode: 'Week',
  columns: [
    { text: 'Name', field: 'name' },
    { text: 'Sq/ft', field: 'area' },
    { text: 'Pcs', field: 'pieces' }
  ]
})
// document.querySelector(".gantt-container").scrollLeft = 2045;
