//a
#include <iostream>
#include <cstring>
#include <algorithm>

using namespace std;

int main()
{
    int t;
    cin >> t;
    while(t--)
    {
        int x,k;
        cin >> x >> k;
            if(x % k == 0)
            {
                cout << 2 <<endl;
                cout << x-1 << ' ' << 1 <<endl;
            }
            else{ cout << 1 <<endl;
            cout << x << endl;
            }
    }
    return 0;
}
//b
#include <iostream>
#include <cstring>
#include <algorithm>

using namespace std;

int main()
{
    int t;
    cin >> t;
    while(t--)
    {
        int n;
        int ans = 0;
        string a;
        cin >> n >> a;
        for(int i = 0,j = 0;i<n;i = j)
        {
            while(j < n && a[i] == a[j])
            {
                j++;
            }
            ans = max(ans,j-i);
        }
        cout << ans + 1 << endl;
    }
}
//c
#include <iostream>
#include <cstring>
#include <algorithm>

using namespace std;

int main()
{
   int t;
   cin >> t;
   while (t--)
   {
       string a;
       cin >> a;
       for (int i = 0; i <= a.size(); i++)
       {
           if (a[i] == '1' || a[i] == '0') {
              continue;
           }
           if (i == 0)
           {
               a[i] = '0';
           }
           else {
               a[i] = a[i - 1];
            }
       }
       cout << a << endl;
   }
   return 0;
}



