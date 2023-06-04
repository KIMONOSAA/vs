//a
// #include <iostream>
// #include <cstring>
// #include <algorithm>

// using namespace std;
// const int N = 210;
// struct node{
//     string name;
//     int age;
// }no[N];
// int main()
// {
//     int n;
//     cin >> n;
//     long long maxs = 0;
//     for(int i = 0;i<n;i++)
//     {
//         cin >> no[i].name >> no[i].age;
//         if(no[i].age < no[maxs].age)maxs = i;
//     }
//     for(int i = 0;i<n;i++){
//         cout << no[(maxs+i)%n].name <<endl; 
//     }
//     return 0;
// }

//b
// #include <iostream>
// #include <cstring>
// #include <algorithm>

// using namespace std;
// int main() {

//     ios::sync_with_stdio(false);
//     cin.tie(nullptr);
//     string cl;
//     cin >> cl;

//     int len = cl.size();
//     if (len <= 3) {
//         cout << cl << endl;
//     } else if (len <= 4) {
//         cl[len - 1] = '0';
//         cout << cl << endl;
//     } else if (len <= 5) {
//         cl.replace(len - 2, 2, "00");
//         cout << cl << endl;
//     } else if (len <= 6) {
//         cl.replace(len - 3, 3, "000");
//         cout << cl << endl;
//     } else if (len <= 7) {
//         cl.replace(len - 4, 4, "0000");
//         cout << cl << endl;
//     } else if (len <= 8) {
//         cl.replace(len - 5, 5, "00000");
//         cout << cl << endl;
//     } else if (len <= 9) {
//         cl.replace(len - 6, 6, "000000");
//         cout << cl << endl;
//     }

//     return 0;
// }


