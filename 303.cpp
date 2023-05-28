//a
// #include <iostream>
// #include <cstring>
// #include <algorithm>

// using namespace std;

// int main()
// {
//     int n;
//     cin >> n;
//     string a,b;
//     cin >> a >> b ;
//     bool flag = true;
//     for(int i = 0;i<n;i++)
//     {
//         if(a[i] == 'l')a[i] = '1';
//         if(a[i] == 'o')a[i] = '0';
//         if(b[i] == 'l')b[i] = '1';
//         if(b[i] == 'o')b[i] = '0';
//         if(a[i] != b[i])
//         {
//             cout << "No" <<endl;
//             flag = false;
//             break;

//         }
//     }
//     if(flag)
//     {
//         cout << "Yes" <<endl;
//     }

//     return 0;
// }
//b
// #include <iostream>
// #include <cstring>
// #include <algorithm>

// using namespace std;
// const int N = 200000;
// int as[N+10];
// int mp[64][64];

// int main()
// {
//     int n,m,a,b,r;
//     scanf("%d %d",&n,&m);
//     memset(mp,0,sizeof(mp));
//     for (int i = 0;i<m;i++)
//     {
//         scanf("%d",&a);
//         for(int j = 1;j<n;j++)
//         {
//             scanf("%d",&b);
//             mp[a][b]++;
//             mp[b][a]++;
//             a = b;
//         }
//     }
//     r = 0;
//     for(int i = 1;i<n;i++)
//     {
//         for(int j = i+1;j<=n;j++)
//         {
//             if(mp[i][j] == 0)
//             r++;
//         }
//     }
//     printf("%d\n",r);
//     return 0;
// }

//c
// #include <iostream>
// #include <cstring>
// #include <algorithm>
// #include <set>
// using namespace std;
// typedef pair<int, int>PII;
// int main()
// {
//     ios::sync_with_stdio(false);
//     cin.tie(nullptr);
//     string a;
//     int n, m, h, k;
//     int x, y, i;
//     cin >> n >> m >> h >> k;
//     cin >> a;
//     set<PII>p;
//     for (int i = 0; i < m; i++)
//     {

//         cin >> x >> y;
//         p.insert({ x,y });
//     }
//     x = 0, y = 0;
    
//     for (i = 0; i < n; i++)
//     {
//         if (h <= 0)break;
//         h--;
//         if (a[i] == 'R')x++;
//         else if (a[i] == 'D')y--;
//         else if (a[i] == 'L')x--;
//         else y++;
//         if (h < k && p.count({ x,y })) {
//             h = k;
//             p.erase({ x,y });
//         }
//     }
//     if (i < n)cout << "No" << endl;
//     else cout << "Yes" << endl;
//     return 0;
// }
