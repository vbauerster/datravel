export class Welcome {
  ulsModel = [
    {
      id: '1',
      items: ['A', 'B', 'C'],
    },
    {
      id: '2',
      items: [1, 2, 3],
      feedback: {
        bdHighlight: true,
        bgHighlight: false
      }
    },
    {
      id: '3',
      items: ['X', 'Y', 'Z'],
      feedback: {
        bdHighlight: true,
        bgHighlight: true
      },
      redundantCopyTo: ['1']
    }
  ];
}
