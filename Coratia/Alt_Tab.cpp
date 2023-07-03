#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
typedef long double ld;
ll mod = 1e9 + 7;
#define nl "\n"
#define dbg(x) cout << #x << " = " << x << nl
void solve()
{
    int n;
    cin>>n;
    string s[n];
    for(int i=0;i<n;i++){
        cin>>s[i];
    }
    map<string,int> mp;
    vector<pair<int,string>> v;
    int t=1;
    for(int i=0;i<n;i++){
        mp[s[i]]=t;
        t++;
    }
    for(auto it:mp){
        v.push_back({it.second,it.first});
    }
    sort(v.rbegin(),v.rend());
    string ans;
    for(int i=0;i<v.size();i++){
        string s=v[i].second;
        ans+=s.substr(s.size()-2,2);
    }
    cout<<ans<<endl;
}
int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    // ll testcases;
    // cin >> testcases;
    // for (int it = 1; it <= testcases; it++)
    // {
    //     // cout << "Case #" << it << ": ";
    //     solve();
    // }
    solve();
    
    return 0;
}




