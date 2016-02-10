
export class Welcome {
  ulsModel = [
    {
      id: '1',
      items: ['A', 'B', 'C']
    },
    {
      id: '2',
      items: [1, 2, 3],
      borderHighlight: true,
      bgHighlight: false,
      highlightColor: 'red',
      highlightTimeout: 200
    },
    {
      id: '3',
      items: ['X', 'Y', 'Z'],
      borderHighlight: true,
      bgHighlight: true,
      highlightColor: 'red',
      highlightTimeout: 200
    }
  ];

  submit(event) {
    console.log(event);
  }
}
