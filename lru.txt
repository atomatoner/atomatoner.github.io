#include<iostream>
using namespace std;
int main()
{
    int nop, nof, page[20], i, count=0;
    cout<<"Enter the number of pages:";
    cin>>nop;
    cout<<"Enter the reference string\n";
    for(i=0;i<nop;i++)
    {
        cin>>page[i];
        cout<<"\t";
    }
    cout<<"Enter the number of frames: ";
    cin>>nof;
    int frame[nof], fcount[nof];
    for(i=0;i<nof;i++)
    {
        frame[i]=-1;     // Store the frames
        fcount[i]=0;    // Track when the page is last used
    }
    i=0;
    while(i<nop)
    {
        int j=0, flag=0;
        while(j<nof)
        {
            if(page[i]==frame[j])   /* Checking whether
            a page already exists in a frame*/
            {
                flag=1;
                fcount[j]=i+1;
            }
            j++;
        }
        j=0;
        cout<<"\n\n\t-----------------\t";
        cout<<page[i]<<"--->"<<"\t";
        if(flag==0)
        {
            int min=0, k=0;
            while(k<nof-1)
            {
                if(fcount[min]>fcount[k+1])
                    min=k+1;
                k++;
            }
            frame[min]=page[i];
            fcount[min]=i+1;
            count++;

            while(j<nof)
            {
                cout<<"\t|"<<frame[j]<<"|";
                j++;
            }
        }
        i++;
    }
    cout<<"\n\t***********************\n";
    cout<<"\n\tPage Fault is: "<<count;
    return 0;
}


